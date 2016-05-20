
public class WeaponBuisnessController {
	public static WeaponDto findWeaponByType(WeaponType weaponType) {
		return WeaponDataController.findWeaponByType(weaponType);
	}
}
