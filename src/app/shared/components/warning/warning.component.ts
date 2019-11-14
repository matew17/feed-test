import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-warning',
    templateUrl: './warning.component.html',
    styleUrls: ['./warning.component.scss']
})
export class WarningComponent implements OnInit {
    @Input() data: {};
    shown = true;

    constructor() { }

    ngOnInit() { }

    close(): void {
        this.shown = false;
    }

}
