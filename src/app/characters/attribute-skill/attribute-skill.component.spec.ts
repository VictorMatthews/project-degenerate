import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeSkillComponent } from './attribute-skill.component';

describe('AttributeSkillComponent', () => {
  let component: AttributeSkillComponent;
  let fixture: ComponentFixture<AttributeSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
