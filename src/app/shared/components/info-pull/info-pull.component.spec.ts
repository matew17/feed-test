import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPullComponent } from './info-pull.component';

describe('InfoPullComponent', () => {
  let component: InfoPullComponent;
  let fixture: ComponentFixture<InfoPullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
