import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainTimePullComponent } from './remain-time-pull.component';

describe('RemainTimePullComponent', () => {
  let component: RemainTimePullComponent;
  let fixture: ComponentFixture<RemainTimePullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemainTimePullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainTimePullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
