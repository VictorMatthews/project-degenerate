
public class GenerateWeapon {
	public String generateNewWeapon(WeaponType weaponType) {
		WeaponDto weapon = WeaponService.findWeaponByType(weaponType);
		return "Your new " + weaponType.getWeaponType() + ": " + weapon.getFirstWeaponName() + " " + weapon.getSecondWeaponName() 
			+ " " + weapon.getWeaponQuality() + " " + weapon.getPhysicalFeature();
	}
}
