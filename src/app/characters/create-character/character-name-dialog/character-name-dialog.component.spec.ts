import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterNameDialogComponent } from './character-name-dialog.component';

describe('CharacterNameDialogComponent', () => {
  let component: CharacterNameDialogComponent;
  let fixture: ComponentFixture<CharacterNameDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterNameDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterNameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
