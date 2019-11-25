import { Component, OnInit, Input } from '@angular/core';

import { HomePageService } from '@services/home-page.service';

@Component({
    selector: 'app-pull-card',
    templateUrl: './pull-card.component.html',
    styleUrls: ['./pull-card.component.scss']
})
export class PullCardComponent implements OnInit {
    @Input() data;
    allVotes: {};
    alreadyVoted = false;
    averageIcon: boolean;
    isLoading: boolean;
    myVote: string;
    percentageDown: number;
    percentageUp: number;

    constructor(private homPageService: HomePageService) { }

    ngOnInit() {
        this.allVotes = this.data.thumbs;
        this.setPopularityIcon(this.allVotes);
        this.setPercentage(this.allVotes);
    }

    setVote(choise) {
        this.myVote = choise;
    }

    voteNow() {
        if (this.myVote) {
            this.isLoading = true;
            this.homPageService.voteService()
                .subscribe(() => {
                    this.isLoading = false;
                    this.voteNowLocalChanges();
                }, err => {
                    this.isLoading = false;
                    console.log(err);
                });
        }
    }

    voteNowLocalChanges() {
        if (this.myVote === 'up') {
            this.allVotes['up'] += 1;
        } else if (this.myVote === 'down') {
            this.allVotes['down'] += 1;
        }

        delete this.myVote;
        this.setPercentage(this.allVotes);
        this.setPopularityIcon(this.allVotes);
        this.alreadyVoted = true;
    }

    voteAgain(): void {
        this.alreadyVoted = false;
    }

    setPopularityIcon(votes): void {
        this.averageIcon = votes.up >= votes.down;
    }

    setPercentage(votes): void {
        const totalVotes = votes.up + votes.down;

        this.percentageUp = Math.round((votes.up / totalVotes) * 100);
        this.percentageDown = Math.round((votes.down / totalVotes) * 100);
    }
}
