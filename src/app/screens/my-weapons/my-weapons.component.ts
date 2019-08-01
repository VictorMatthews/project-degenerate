import { Component, OnInit } from '@angular/core';
import {GeneratedWeapon, MakerAttributes, WeaponAttributes, WeaponNames} from '../../cards/weapon/weapon.interfaces';
// import * as WeaponAttributesData from '../../resources/weaponAttributes.json';
// import * as WeaponNamesData from '../../resources/weaponNames.json';
// import * as MakerAttributesData from '../../resources/makerAttributes.json';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'my-weapons',
  templateUrl: './my-weapons.component.html',
  styleUrls: ['./my-weapons.component.css']
})
export class MyWeaponsComponent implements OnInit {
  weapons: GeneratedWeapon[];
  weaponAttributes: any;
  weaponNames: any;
  makerAttributes: any;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get('../../resources/weaponAttributes.json').subscribe(data => {
      this.weaponAttributes = data;
    });
    this.http.get('../../resources/weaponNames.json').subscribe(data => {
      this.weaponNames = data;
    });
    this.http.get('../../resources/makerAttributes.json').subscribe(data => {
      this.makerAttributes = data;
    });
  }

  generateWeapon() {
    let randomWeaponIndex = this.getRandomNumber(this.weaponAttributes.length);
    let randomWeapon = this.weaponAttributes[randomWeaponIndex];

    let randomNameIndex = this.getRandomNumber(this.weaponNames.names.length);
    let randomDescriptorIndex = this.getRandomNumber(randomWeapon.descriptorName.length);
    let randomQualityIndex = this.getRandomNumber(randomWeapon.weaponQuality.length);
    let randomPhysicalFeatureIndex = this.getRandomNumber(randomWeapon.physicalFeature.length);
    let randomMadeByIndex = this.getRandomNumber(this.makerAttributes.race.length);
    let randomWhoWasIndex = this.getRandomNumber(this.makerAttributes.whoWas.length);
    let randomFamousForIndex = this.getRandomNumber(this.makerAttributes.famousFor.length);

    let newWeapon: GeneratedWeapon;
    newWeapon.weaponType = randomWeapon.type;
    newWeapon.weaponFirstName = this.weaponNames.names[randomNameIndex];
    newWeapon.weaponSecondName = randomWeapon.descriptorName[randomDescriptorIndex];
    newWeapon.weaponQuality = randomWeapon.weaponQuality[randomQualityIndex];
    newWeapon.weaponPhysicalFeature = randomWeapon.physicalFeature[randomPhysicalFeatureIndex];
    newWeapon.madeBy = this.makerAttributes.race[randomMadeByIndex];
    newWeapon.whoWas = this.makerAttributes.whoWas[randomWhoWasIndex];
    newWeapon.famousFor = this.makerAttributes.famousFor[randomFamousForIndex];

    this.weapons.push(newWeapon);
  }

  getRandomNumber(max: number): number {
    return Math.floor(Math.random()*max);
  }
}
