import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWeaponsComponent } from './my-weapons.component';

describe('MyWeaponsComponent', () => {
  let component: MyWeaponsComponent;
  let fixture: ComponentFixture<MyWeaponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWeaponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWeaponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
