import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-info-pull',
    templateUrl: './info-pull.component.html',
    styleUrls: ['./info-pull.component.scss']
})
export class InfoPullComponent implements OnInit {

    @Input() data: {};

    constructor() { }

    ngOnInit() { }

}
