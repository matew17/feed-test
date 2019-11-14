import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-remain-time-pull',
    templateUrl: './remain-time-pull.component.html',
    styleUrls: ['./remain-time-pull.component.scss']
})
export class RemainTimePullComponent implements OnInit {
    @Input() text: string;
    @Input() days: number;

    constructor() { }

    ngOnInit() { }

}
