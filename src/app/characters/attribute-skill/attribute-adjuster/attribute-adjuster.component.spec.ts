import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeAdjusterComponent } from './attribute-adjuster.component';

describe('AttributeAdjusterComponent', () => {
  let component: AttributeAdjusterComponent;
  let fixture: ComponentFixture<AttributeAdjusterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeAdjusterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeAdjusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
