import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PullCardComponent } from './pull-card.component';

describe('PullCardComponent', () => {
    let component: PullCardComponent;
    let fixture: ComponentFixture<PullCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PullCardComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PullCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
