
public enum WeaponType {
	SWORD("Sword"),
	RAPIER("Rapier"),
	AXE("Axe"),
	HAMMER("Hammer"),
	MAUL("Maul"),
	BOW("Bow"),
	CROSS_BOW("Cross Bow"),
	SPEAR("Spear"),
	DAGGER("Dagger"),
	QUARTER_STAFF("Quarter Staff");
	
	private final String weaponType;
	
	private WeaponType(String weaponType) {
		this.weaponType = weaponType;
	}
	
	public String getWeaponType() {
		return weaponType;
	}
}
