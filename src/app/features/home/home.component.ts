import { Component, OnInit } from '@angular/core';

import { HomePageService } from '@services/home-page.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    isLoading = true;
    pageData: {};

    constructor(private homePageService: HomePageService) { }

    ngOnInit() {
        this.getMenuData();
    }

    getMenuData(): void {
        this.isLoading = true;

        this.homePageService.getHomePageInfo()
            .subscribe(data => {
                this.pageData = data;
                this.isLoading = false;
            }, err => this.isLoading = false);
    }
}
