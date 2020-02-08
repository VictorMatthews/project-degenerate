import {Component, Input, OnInit} from '@angular/core';
import {GeneratedWeapon} from "./weapon.interfaces";

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.scss']
})
export class WeaponComponent implements OnInit {

  @Input() weapon: GeneratedWeapon;

  constructor() { }

  ngOnInit() {
  }

  getWeaponDescription(): string {
    return this.weapon.weaponFirstName + " " + this.weapon.weaponSecondName + " - " +
      this.weapon.weaponQuality + " " + this.weapon.weaponPhysicalFeature +
      " This weapon was made by a(n) "+ this.weapon.madeBy + ", who was a " + this.weapon.whoWas +
      ". This weapon is famous because " + this.weapon.famousFor;
  }

}
