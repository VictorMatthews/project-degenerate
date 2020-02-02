export interface Character {
  isCharacterComplete: boolean;
  characterName: string;
  background: string;
  race: string;
  subRace: string;
  className: string;
  alignment: string;
  classLevel: string,
  experience: string,

  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;

  personalityTrait: string;
  ideals: string;
  bonds: string;
  flaws: string;

  profSkills: Attribute[];
  increaseAttributes: CharacterAttribute[];
}

export interface CharacterAttribute {
  attribute: Attribute;
  increaseValue: number;
}

export class Attribute {
  constructor(readonly id: number, readonly name: string) {
    this.id = id;
    this.name = name;
  }

  public getId(): number {
    return this.id;
  }

  public equals(other: Attribute) {
    return other !== undefined && other.id === this.id && other.name === this.name;
  }

  public toString() {
    return this.name;
  }
}

export class Attributes {
  readonly STRENGTH = new Attribute(1, "Strength");
  readonly DEXTERITY = new Attribute(2, "Dexterity");
  readonly CONSTITUTION = new Attribute(3, "Constitution");
  readonly INTELLIGENCE = new Attribute(4, "Intelligence");
  readonly WISDOM = new Attribute(5, "Wisdom");
  readonly CHARISMA = new Attribute(6, "Charisma");

  public getAttributes(): Attribute[] {
    return [this.STRENGTH, this.DEXTERITY, this.CONSTITUTION, this.INTELLIGENCE, this.WISDOM, this.CHARISMA];
  }
}

export class Skill {
  constructor(readonly id: number, readonly name: string, readonly attributeMod: Attribute) {
    this.id = id;
    this.name = name;
    this.attributeMod = attributeMod
  }

  public getId(): number {
    return this.id;
  }

  public getAttributeMod(): Attribute {
    return this.attributeMod;
  }

  public equals(other: Attribute) {
    return other !== undefined && other.id === this.id && other.name === this.name;
  }

  public toString() {
    return this.name;
  }
}

export class Skills {
  readonly ACROBATICS = new Skill( 1, 'Acrobatics', CharacterConstants.attributes.DEXTERITY);
  readonly ANIMAL_HANDLING = new Skill( 2, 'Animal Handling', CharacterConstants.attributes.WISDOM);
  readonly ARCANA = new Skill( 3, 'Arcana', CharacterConstants.attributes.INTELLIGENCE);
  readonly ATHLETICS = new Skill( 4, 'Athletics', CharacterConstants.attributes.STRENGTH);
  readonly DECEPTION = new Skill( 5, 'Deception', CharacterConstants.attributes.CHARISMA);
  readonly HISTORY = new Skill( 6, 'History', CharacterConstants.attributes.INTELLIGENCE);
  readonly INSIGHT = new Skill( 7, 'Insight', CharacterConstants.attributes.WISDOM);
  readonly INTIMIDATION = new Skill( 8, 'Intimidation', CharacterConstants.attributes.CHARISMA);
  readonly INVESTIGATION = new Skill( 9, 'Investigation', CharacterConstants.attributes.INTELLIGENCE);
  readonly MEDICINE = new Skill(10, 'Medicine', CharacterConstants.attributes.WISDOM);
  readonly NATURE = new Skill(11, 'Nature', CharacterConstants.attributes.INTELLIGENCE);
  readonly PERCEPTION = new Skill(12, 'Perception', CharacterConstants.attributes.WISDOM);
  readonly PERFORMANCE = new Skill(13, 'Performance', CharacterConstants.attributes.CHARISMA);
  readonly PERSUASION = new Skill(14, 'Persuasion', CharacterConstants.attributes.CHARISMA);
  readonly RELIGION = new Skill(15, 'Religion', CharacterConstants.attributes.INTELLIGENCE);
  readonly SLEIGHT_OF_HAND = new Skill(16, 'Sleight of Hand', CharacterConstants.attributes.DEXTERITY);
  readonly STEALTH = new Skill(17, 'Stealth', CharacterConstants.attributes.DEXTERITY);
  readonly SURVIVAL = new Skill(18, 'Survival', CharacterConstants.attributes.WISDOM);

  public getSkills(): Skill[] {
    return [this.ACROBATICS, this.ANIMAL_HANDLING, this.ARCANA, this.ATHLETICS, this.DECEPTION, this.HISTORY,
            this.INSIGHT, this.INTIMIDATION, this.INVESTIGATION, this.MEDICINE, this.NATURE, this.PERCEPTION,
            this.PERFORMANCE, this.PERSUASION, this.RELIGION, this.SLEIGHT_OF_HAND, this.STEALTH, this.SURVIVAL];
  }
}

export class Race {
  constructor(readonly raceId: number, readonly raceName?: string, readonly speed?: number, readonly increaseAttribute?: CharacterAttribute[], readonly raceInfo?: RaceInfo, readonly hasSubRaces?: boolean) {
    this.raceId = raceId;
    this.raceName = raceName;
    this.speed = speed;
    this.increaseAttribute = increaseAttribute;
    this.raceInfo = raceInfo;
    this.hasSubRaces = hasSubRaces;
  }

  public getRaceName(): string {
    return this.raceName;
  }

  public getRaceId(): number {
    return this.raceId;
  }

  public getIncreaseAttribute(): CharacterAttribute[] {
    return this.increaseAttribute;
  }

  public getRaceInfo(): RaceInfo {
    return this.raceInfo;
  }

  public getHasSubRaces(): boolean {
    return this.hasSubRaces;
  }

  public toString() {
    return this.raceName;
  }
}

export class Races {
  readonly DWARF = new Race(1, 'Dwarf', 25, [{attribute: CharacterConstants.attributes.CONSTITUTION, increaseValue: 2}], CharacterConstants.raceInfos.DWARF, true);
  readonly ELF = new Race(2, 'Elf', 30, [{attribute: CharacterConstants.attributes.DEXTERITY, increaseValue: 2}], CharacterConstants.raceInfos.ELF, true);
  readonly HALFLING = new Race(3, 'Halfling', 25, [{attribute: CharacterConstants.attributes.DEXTERITY, increaseValue: 2}], CharacterConstants.raceInfos.HALFLING, true);
  readonly HUMAN = new Race(4, 'Human', 30, this.populateHumanAttributes(), CharacterConstants.raceInfos.HUMAN, false);
  readonly DRAGONBORN = new Race(5, 'Dragonborn', 30, [{attribute: CharacterConstants.attributes.STRENGTH, increaseValue: 2},{attribute: CharacterConstants.attributes.CHARISMA, increaseValue: 1}], CharacterConstants.raceInfos.DRAGONBORN, false);
  readonly GNOME = new Race(6, 'Gnome', 25, [{attribute: CharacterConstants.attributes.INTELLIGENCE, increaseValue: 2}], CharacterConstants.raceInfos.GNOME, true);
  readonly HALF_ELF = new Race(7, 'Half Elf', 30, [{attribute: CharacterConstants.attributes.CHARISMA, increaseValue: 2}], CharacterConstants.raceInfos.HALF_ELF, false);
  readonly HALF_ORC = new Race(8, 'Half Orc', 30, [{attribute: CharacterConstants.attributes.STRENGTH, increaseValue: 2},{attribute: CharacterConstants.attributes.CONSTITUTION, increaseValue: 1}], CharacterConstants.raceInfos.HALF_ORC, false);
  readonly TIEFLING= new Race(9, 'Tiefling', 30, [{attribute: CharacterConstants.attributes.CHARISMA, increaseValue: 2},{attribute: CharacterConstants.attributes.INTELLIGENCE, increaseValue: 1}], CharacterConstants.raceInfos.TIEFLING, false);

  private populateHumanAttributes(): CharacterAttribute[] {
    let humanAttributes: CharacterAttribute[] = [];
    for (let attr of CharacterConstants.attributes.getAttributes().reverse()) {
      humanAttributes.push({attribute: attr, increaseValue: 1})
    }
    return humanAttributes;
  }

  public getRaces(): Race[] {
    return [this.DWARF, this.ELF, this.HALFLING, this.HUMAN, this.DRAGONBORN, this.GNOME, this.HALF_ELF, this.HALF_ORC, this.TIEFLING];
  }
}

export class SubRace {
  constructor(readonly raceId?: number, readonly raceName?: string, readonly increaseAttribute?: CharacterAttribute[], readonly raceInfo?: RaceInfo) {
    this.raceId = raceId;
    this.raceName = raceName;
    this.increaseAttribute = increaseAttribute;
    this.raceInfo = raceInfo;
  }

  public getSubRaceName(): string {
    return this.raceName;
  }

  public getRaceId(): number {
    return this.raceId;
  }

  public getIncreaseAttribute(): CharacterAttribute[] {
    return this.increaseAttribute;
  }

  public getRaceInfo(): RaceInfo {
    return this.raceInfo;
  }

  public toString() {
    return this.raceName;
  }
}

export class SubRaces {
  readonly NO_SUBRACE = new SubRace(0);
  readonly HILL_DWARF = new SubRace(CharacterConstants.races.DWARF.getRaceId(), 'Hill Dwarf', [{attribute: CharacterConstants.attributes.WISDOM, increaseValue: 1}], CharacterConstants.raceInfos.HILL_DWARF);
  readonly MOUNTAIN_DWARF = new SubRace(CharacterConstants.races.DWARF.getRaceId(), 'Mountain Dwarf', [{attribute: CharacterConstants.attributes.STRENGTH, increaseValue: 2}], CharacterConstants.raceInfos.MOUNTAIN_DWARF);
  readonly HIGH_ELF = new SubRace(CharacterConstants.races.ELF.getRaceId(), 'High Elf', [{attribute: CharacterConstants.attributes.INTELLIGENCE, increaseValue: 1}], CharacterConstants.raceInfos.HIGH_ELF);
  readonly WOOD_ELF = new SubRace(CharacterConstants.races.ELF.getRaceId(), 'Wood Elf', [{attribute: CharacterConstants.attributes.WISDOM, increaseValue: 1}], CharacterConstants.raceInfos.WOOD_ELF);
  readonly DARK_ELF = new SubRace(CharacterConstants.races.ELF.getRaceId(), 'Dark Elf (Drow)', [{attribute: CharacterConstants.attributes.CHARISMA, increaseValue: 1}], CharacterConstants.raceInfos.DARK_ELF);
  readonly LIGHT_FOOT_HALFLING = new SubRace(CharacterConstants.races.HALFLING.getRaceId(), 'Lightfoot Halfling', [{attribute: CharacterConstants.attributes.CHARISMA, increaseValue: 1}], CharacterConstants.raceInfos.LIGHT_FOOT_HALFLING);
  readonly STOUT_HALFLING = new SubRace(CharacterConstants.races.HALFLING.getRaceId(), 'Stout Halfling', [{attribute: CharacterConstants.attributes.CONSTITUTION, increaseValue: 1}], CharacterConstants.raceInfos.STOUT_HALFLING);
  readonly ROCK_GNOME = new SubRace(CharacterConstants.races.GNOME.getRaceId(), 'Rock Gnome', [{attribute: CharacterConstants.attributes.CONSTITUTION, increaseValue: 1}], CharacterConstants.raceInfos.ROCK_GNOME);
  readonly FOREST_GNOME = new SubRace(CharacterConstants.races.GNOME.getRaceId(), 'Forest Gnome', [{attribute: CharacterConstants.attributes.DEXTERITY, increaseValue: 1}], CharacterConstants.raceInfos.FOREST_GNOME);
}

export class Class {
  constructor(readonly className: string, readonly hitDie: number, readonly classInfo: ClassInfo, readonly profSkillsToChoose: number, readonly skillChoices: Skill[], readonly savingThrows: Attribute[]) {
    this.className = className;
    this.hitDie = hitDie;
    this.classInfo = classInfo;
    this.profSkillsToChoose = profSkillsToChoose;
    this.skillChoices = skillChoices;
    this.savingThrows = savingThrows;
  }
}

export class Classes {
  readonly BARBARIAN = new Class('Barbarian', 12, CharacterConstants.classInfos.BARBARIAN,2, [CharacterConstants.skills.ANIMAL_HANDLING, CharacterConstants.skills.ATHLETICS, CharacterConstants.skills.INTIMIDATION, CharacterConstants.skills.NATURE, CharacterConstants.skills.PERCEPTION, CharacterConstants.skills.SURVIVAL], [CharacterConstants.attributes.STRENGTH, CharacterConstants.attributes.CONSTITUTION]);
  readonly BARD = new Class('Bard', 12, CharacterConstants.classInfos.BARD,3, CharacterConstants.skills.getSkills(), [CharacterConstants.attributes.DEXTERITY, CharacterConstants.attributes.CHARISMA]);
  readonly CLERIC = new Class('Cleric', 12, CharacterConstants.classInfos.CLERIC,2,[CharacterConstants.skills.HISTORY, CharacterConstants.skills.INSIGHT, CharacterConstants.skills.MEDICINE,CharacterConstants.skills.PERSUASION, CharacterConstants.skills.RELIGION],[CharacterConstants.attributes.WISDOM, CharacterConstants.attributes.CHARISMA]);
  readonly DRUID = new Class('Druid', 12, CharacterConstants.classInfos.DRUID,2,[CharacterConstants.skills.ARCANA, CharacterConstants.skills.INSIGHT, CharacterConstants.skills.ANIMAL_HANDLING,CharacterConstants.skills.MEDICINE, CharacterConstants.skills.NATURE, CharacterConstants.skills.PERCEPTION,CharacterConstants.skills.RELIGION, CharacterConstants.skills.SURVIVAL],[CharacterConstants.attributes.INTELLIGENCE, CharacterConstants.attributes.WISDOM]);
  readonly FIGHTER = new Class('Fighter',12, CharacterConstants.classInfos.FIGHTER,2,[CharacterConstants.skills.ACROBATICS, CharacterConstants.skills.ANIMAL_HANDLING, CharacterConstants.skills.ATHLETICS,CharacterConstants.skills.HISTORY, CharacterConstants.skills.INSIGHT, CharacterConstants.skills.INTIMIDATION,CharacterConstants.skills.PERCEPTION, CharacterConstants.skills.SURVIVAL],[CharacterConstants.attributes.STRENGTH, CharacterConstants.attributes.CONSTITUTION]);
  readonly MONK = new Class('Monk', 12, CharacterConstants.classInfos.MONK,2,[CharacterConstants.skills.ACROBATICS, CharacterConstants.skills.ATHLETICS, CharacterConstants.skills.HISTORY,CharacterConstants.skills.INSIGHT, CharacterConstants.skills.RELIGION, CharacterConstants.skills.STEALTH],[CharacterConstants.attributes.STRENGTH, CharacterConstants.attributes.DEXTERITY]);
  readonly PALADIN = new Class('Paladin', 12, CharacterConstants.classInfos.PALADIN,2,[CharacterConstants.skills.ATHLETICS, CharacterConstants.skills.INSIGHT, CharacterConstants.skills.INTIMIDATION,CharacterConstants.skills.MEDICINE, CharacterConstants.skills.PERSUASION, CharacterConstants.skills.RELIGION],[CharacterConstants.attributes.WISDOM, CharacterConstants.attributes.CHARISMA]);
  readonly RANGER = new Class('Ranger', 12, CharacterConstants.classInfos.RANGER,3,[CharacterConstants.skills.ANIMAL_HANDLING, CharacterConstants.skills.ATHLETICS, CharacterConstants.skills.INSIGHT,CharacterConstants.skills.INVESTIGATION, CharacterConstants.skills.NATURE, CharacterConstants.skills.PERCEPTION,CharacterConstants.skills.STEALTH, CharacterConstants.skills.SURVIVAL],[CharacterConstants.attributes.STRENGTH, CharacterConstants.attributes.DEXTERITY]);
  readonly ROGUE = new Class('Rogue', 12, CharacterConstants.classInfos.ROGUE,4,[CharacterConstants.skills.ACROBATICS, CharacterConstants.skills.ATHLETICS, CharacterConstants.skills.DECEPTION,CharacterConstants.skills.INSIGHT, CharacterConstants.skills.INTIMIDATION, CharacterConstants.skills.INVESTIGATION,CharacterConstants.skills.PERCEPTION, CharacterConstants.skills.PERFORMANCE, CharacterConstants.skills.PERSUASION,CharacterConstants.skills.SLEIGHT_OF_HAND, CharacterConstants.skills.STEALTH],[CharacterConstants.attributes.DEXTERITY, CharacterConstants.attributes.INTELLIGENCE]);
  readonly SORCERER = new Class('Sorcerer', 12, CharacterConstants.classInfos.SORCERER,2,[CharacterConstants.skills.ARCANA, CharacterConstants.skills.DECEPTION, CharacterConstants.skills.INSIGHT,CharacterConstants.skills.INTIMIDATION, CharacterConstants.skills.PERSUASION, CharacterConstants.skills.RELIGION],[CharacterConstants.attributes.CONSTITUTION, CharacterConstants.attributes.CHARISMA]);
  readonly WARLOCK = new Class('Warlock', 12, CharacterConstants.classInfos.WARLOCK,2,[CharacterConstants.skills.ARCANA, CharacterConstants.skills.DECEPTION, CharacterConstants.skills.HISTORY,CharacterConstants.skills.INTIMIDATION, CharacterConstants.skills.INVESTIGATION, CharacterConstants.skills.NATURE,CharacterConstants.skills.RELIGION],[CharacterConstants.attributes.WISDOM, CharacterConstants.attributes.CHARISMA]);
  readonly WIZARD = new Class('Wizard', 12, CharacterConstants.classInfos.WIZARD,2,[CharacterConstants.skills.ARCANA, CharacterConstants.skills.HISTORY, CharacterConstants.skills.INSIGHT,CharacterConstants.skills.INVESTIGATION, CharacterConstants.skills.MEDICINE, CharacterConstants.skills.RELIGION],[CharacterConstants.attributes.INTELLIGENCE, CharacterConstants.attributes.WISDOM]);
}

export class Background {
  constructor(readonly backgroundId: number, readonly backgroundName: string, readonly profSkills: Skill[]) {
    this.backgroundId = backgroundId;
    this.backgroundName = backgroundName;
    this.profSkills = profSkills;
  }

  public getBackgroundId(): number {
    return this.backgroundId;
  }

  public getBackgroundName(): string {
    return this.backgroundName;
  }

  public getProfSkills(): Skill[] {
    return this.profSkills;
  }

  public toString(): string {
    return this.backgroundName;
  }
}

export class Backgrounds {
  readonly ACOLYTE = new Background( 1, 'Acolyte', [CharacterConstants.skills.INSIGHT,CharacterConstants.skills.RELIGION]);
  readonly CHARLATAN = new Background( 2, 'Charlatan', [CharacterConstants.skills.DECEPTION,CharacterConstants.skills.SLEIGHT_OF_HAND]);
  readonly CRIMINAL = new Background( 3, 'Criminal', [CharacterConstants.skills.DECEPTION,CharacterConstants.skills.STEALTH]);
  readonly ENTERTAINER = new Background( 4, 'Entertainer', [CharacterConstants.skills.ACROBATICS,CharacterConstants.skills.PERFORMANCE]);
  readonly FOLK_HERO = new Background( 5, 'Folk Hero', [CharacterConstants.skills.ANIMAL_HANDLING,CharacterConstants.skills.SURVIVAL]);
  readonly GUILD_ARTISAN = new Background( 6, 'Guild Artisan', [CharacterConstants.skills.INSIGHT,CharacterConstants.skills.PERSUASION]);
  readonly HERMIT = new Background( 7, 'Hermit', [CharacterConstants.skills.MEDICINE,CharacterConstants.skills.RELIGION]);
  readonly NOBLE = new Background( 8, 'Noble', [CharacterConstants.skills.HISTORY,CharacterConstants.skills.PERSUASION]);
  readonly OUTLANDER = new Background( 9, 'Outlander', [CharacterConstants.skills.ATHLETICS,CharacterConstants.skills.SURVIVAL]);
  readonly SAGE = new Background(10, 'Sage', [CharacterConstants.skills.ARCANA,CharacterConstants.skills.HISTORY]);
  readonly SAILOR = new Background(11, 'Sailor', [CharacterConstants.skills.ATHLETICS,CharacterConstants.skills.PERCEPTION]);
  readonly SOLDIER = new Background(12, 'Soldier', [CharacterConstants.skills.ATHLETICS,CharacterConstants.skills.INTIMIDATION]);
  readonly URCHIN = new Background(13, 'Urchin', [CharacterConstants.skills.SLEIGHT_OF_HAND,CharacterConstants.skills.STEALTH]);
}

export class RaceInfo {
  constructor(readonly raceName: string, readonly abilityScoreIncrease?: string, readonly age?: string,
              readonly alignment?: string, readonly size?: string) {
    this.raceName = raceName;
    this.abilityScoreIncrease = abilityScoreIncrease;
    this.age = age;
    this.alignment = alignment;
    this.size = size;
  }
}

export class RaceInfos {
  readonly DWARF = new RaceInfo('');
  readonly ELF = new RaceInfo('');
  readonly HALFLING = new RaceInfo('');
  readonly HUMAN = new RaceInfo('');
  readonly DRAGONBORN = new RaceInfo('');
  readonly GNOME = new RaceInfo('');
  readonly HALF_ELF = new RaceInfo('');
  readonly HALF_ORC = new RaceInfo('');
  readonly TIEFLING = new RaceInfo('');
  readonly HILL_DWARF = new RaceInfo('');
  readonly MOUNTAIN_DWARF = new RaceInfo('');
  readonly HIGH_ELF = new RaceInfo('');
  readonly WOOD_ELF = new RaceInfo('');
  readonly DARK_ELF = new RaceInfo('');
  readonly LIGHT_FOOT_HALFLING = new RaceInfo('');
  readonly STOUT_HALFLING = new RaceInfo('');
  readonly ROCK_GNOME = new RaceInfo('');
  readonly FOREST_GNOME = new RaceInfo('');
}

export class ClassInfo {
  constructor(readonly className: string, readonly armor?: string, readonly weapons?: string, readonly tools?: string) {
    this.className = className;
    this.armor = armor;
    this.weapons = weapons;
    this.tools = tools;
  }
}

export class ClassInfos {
  readonly BARBARIAN = new ClassInfo('');
  readonly BARD = new ClassInfo('');
  readonly CLERIC = new ClassInfo('');
  readonly DRUID = new ClassInfo('');
  readonly FIGHTER = new ClassInfo('');
  readonly MONK = new ClassInfo('');
  readonly PALADIN = new ClassInfo('');
  readonly RANGER = new ClassInfo('');
  readonly ROGUE = new ClassInfo('');
  readonly SORCERER = new ClassInfo('');
  readonly WARLOCK = new ClassInfo('');
  readonly WIZARD = new ClassInfo('');
}

export class CharacterConstants {
  public static attributes = new Attributes();
  public static raceInfos = new RaceInfos();
  public static classInfos = new ClassInfos();
  public static races = new Races();
  public static subRaces = new SubRaces();
  public static skills = new Skills();
  public static backgrounds = new Backgrounds();
}
