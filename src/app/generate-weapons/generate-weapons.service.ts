import { Injectable } from '@angular/core';
import WeaponAttributesData from '../shared/resources/weaponAttributes.json';
import WeaponNamesData from '../shared/resources/weaponNames.json';
import MakerAttributesData from '../shared/resources/makerAttributes.json';
import {GeneratedWeapon, MakerAttributes, WeaponAttributes, WeaponNames} from "./weapon/weapon.interfaces";

@Injectable({
  providedIn: 'root'
})
export class GenerateWeaponsService {
  weaponAttributes: WeaponAttributes[] = WeaponAttributesData;
  weaponNames: WeaponNames = WeaponNamesData;
  makerAttributes: MakerAttributes = MakerAttributesData;

  constructor() { }

  generateWeapon(): GeneratedWeapon {
    let randomWeaponIndex = this.getRandomNumber(this.weaponAttributes.length);
    let randomWeapon = this.weaponAttributes[randomWeaponIndex];

    let randomNameIndex = this.getRandomNumber(this.weaponNames.names.length);
    let randomDescriptorIndex = this.getRandomNumber(randomWeapon.descriptorName.length);
    let randomQualityIndex = this.getRandomNumber(randomWeapon.weaponQuality.length);
    let randomPhysicalFeatureIndex = this.getRandomNumber(randomWeapon.physicalFeature.length);
    let randomMadeByIndex = this.getRandomNumber(this.makerAttributes.race.length);
    let randomWhoWasIndex = this.getRandomNumber(this.makerAttributes.whoWas.length);
    let randomFamousForIndex = this.getRandomNumber(this.makerAttributes.famousFor.length);

    let weaponType = randomWeapon.type;
    let weaponFirstName = this.weaponNames.names[randomNameIndex];
    let weaponSecondName = randomWeapon.descriptorName[randomDescriptorIndex];
    let weaponQuality = randomWeapon.weaponQuality[randomQualityIndex];
    let weaponPhysicalFeature = randomWeapon.physicalFeature[randomPhysicalFeatureIndex];
    let madeBy = this.makerAttributes.race[randomMadeByIndex];
    let whoWas = this.makerAttributes.whoWas[randomWhoWasIndex];
    let famousFor = this.makerAttributes.famousFor[randomFamousForIndex];

    let newWeapon: GeneratedWeapon = {
      weaponType,
      weaponFirstName,
      weaponSecondName,
      weaponQuality,
      weaponPhysicalFeature,
      madeBy,
      whoWas,
      famousFor
    };

    return newWeapon;
  }

  getRandomNumber(max: number): number {
    return Math.floor(Math.random()*max);
  }

}
