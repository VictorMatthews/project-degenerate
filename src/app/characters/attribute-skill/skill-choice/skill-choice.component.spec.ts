import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillChoiceComponent } from './skill-choice.component';

describe('SkillChoiceComponent', () => {
  let component: SkillChoiceComponent;
  let fixture: ComponentFixture<SkillChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
