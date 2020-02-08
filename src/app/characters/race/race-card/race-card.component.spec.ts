import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceCardComponent } from './race-card.component';

describe('RaceCardComponent', () => {
  let component: RaceCardComponent;
  let fixture: ComponentFixture<RaceCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
