import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundDetailComponent } from './background-detail.component';

describe('BackgroundDetailComponent', () => {
  let component: BackgroundDetailComponent;
  let fixture: ComponentFixture<BackgroundDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
