
public class WeaponDataController {
	public static WeaponDto findWeaponByType(WeaponType weaponType) {
		return WeaponDao.findWeaponByType(weaponType);
	}
}
