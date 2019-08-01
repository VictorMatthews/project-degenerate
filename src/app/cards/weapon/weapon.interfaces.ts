export interface MagicWeapon {
  weaponType: string;
  weaponFirstName: string;
  weaponSecondName: string;
  weaponQuality: string;
  weaponPhysicalFeature: string;
  madeBy: string;
  whoWas: string;
  famousFor: string;
}

export interface WeaponAttributes {
  type: string;
  weaponQuality: string[];
  physicalFeature: string[];
  descriptorName: string[];
}

export interface WeaponNames {
  names: string[];
}

export interface MakerAttributes {
  race: string[];
  whoWas: string[];
  famousFor: string[];
}
