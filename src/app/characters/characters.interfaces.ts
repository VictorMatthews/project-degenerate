export interface Character {
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
  readonly ACROBATICS = new Skill( 1, 'Acrobatics', Constants.attributes.DEXTERITY);
  readonly ANIMAL_HANDLING = new Skill( 2, 'Animal Handling', Constants.attributes.WISDOM);
  readonly ARCANA = new Skill( 3, 'Arcana', Constants.attributes.INTELLIGENCE);
  readonly ATHLETICS = new Skill( 4, 'Athletics', Constants.attributes.STRENGTH);
  readonly DECEPTION = new Skill( 5, 'Deception', Constants.attributes.CHARISMA);
  readonly HISTORY = new Skill( 6, 'History', Constants.attributes.INTELLIGENCE);
  readonly INSIGHT = new Skill( 7, 'Insight', Constants.attributes.WISDOM);
  readonly INTIMIDATION = new Skill( 8, 'Intimidation', Constants.attributes.CHARISMA);
  readonly INVESTIGATION = new Skill( 9, 'Investigation', Constants.attributes.INTELLIGENCE);
  readonly MEDICINE = new Skill(10, 'Medicine', Constants.attributes.WISDOM);
  readonly NATURE = new Skill(11, 'Nature', Constants.attributes.INTELLIGENCE);
  readonly PERCEPTION = new Skill(12, 'Perception', Constants.attributes.WISDOM);
  readonly PERFORMANCE = new Skill(13, 'Performance', Constants.attributes.CHARISMA);
  readonly PERSUASION = new Skill(14, 'Persuasion', Constants.attributes.CHARISMA);
  readonly RELIGION = new Skill(15, 'Religion', Constants.attributes.INTELLIGENCE);
  readonly SLEIGHT_OF_HAND = new Skill(16, 'Sleight of Hand', Constants.attributes.DEXTERITY);
  readonly STEALTH = new Skill(17, 'Stealth', Constants.attributes.DEXTERITY);
  readonly SURVIVAL = new Skill(18, 'Survival', Constants.attributes.WISDOM);

  public getSkills(): Skill[] {
    return [this.ACROBATICS, this.ANIMAL_HANDLING, this.ARCANA, this.ATHLETICS, this.DECEPTION, this.HISTORY,
            this.INSIGHT, this.INTIMIDATION, this.INVESTIGATION, this.MEDICINE, this.NATURE, this.PERCEPTION,
            this.PERFORMANCE, this.PERSUASION, this.RELIGION, this.SLEIGHT_OF_HAND, this.STEALTH, this.SURVIVAL];
  }
}

export class Race {
  constructor(readonly raceId: number, readonly raceName?: string, readonly speed?: number, readonly increaseAttribute?: CharacterAttribute[], readonly raceInfo?: RaceInfo) {
    this.raceId = raceId;
    this.raceName = raceName;
    this.speed = speed;
    this.increaseAttribute = increaseAttribute;
    this.raceInfo = raceInfo;
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

  public toString() {
    return this.raceName;
  }
}

export class Races {
  readonly DWARF = new Race(1, 'Dwarf', 25, [{attribute: Constants.attributes.CONSTITUTION, increaseValue: 2}], Constants.raceInfos.DWARF);
  readonly ELF = new Race(2, 'Elf', 30, [{attribute: Constants.attributes.DEXTERITY, increaseValue: 2}], Constants.raceInfos.ELF);
  readonly HALFLING = new Race(3, 'Halfling', 25, [{attribute: Constants.attributes.DEXTERITY, increaseValue: 2}], Constants.raceInfos.HALFLING);
  readonly HUMAN = new Race(4, 'Human', 30, this.populateHumanAttributes(), Constants.raceInfos.HUMAN);
  readonly DRAGONBORN = new Race(5, 'Dragonborn', 30, [{attribute: Constants.attributes.STRENGTH, increaseValue: 2},{attribute: Constants.attributes.CHARISMA, increaseValue: 1}], Constants.raceInfos.DRAGONBORN);
  readonly GNOME = new Race(6, 'Gnome', 25, [{attribute: Constants.attributes.INTELLIGENCE, increaseValue: 2}], Constants.raceInfos.GNOME);
  readonly HALF_ELF = new Race(7, 'Half Elf', 30, [{attribute: Constants.attributes.CHARISMA, increaseValue: 2}], Constants.raceInfos.HALF_ELF);
  readonly HALF_ORC = new Race(8, 'Half Orc', 30, [{attribute: Constants.attributes.STRENGTH, increaseValue: 2},{attribute: Constants.attributes.CONSTITUTION, increaseValue: 1}], Constants.raceInfos.HALF_ORC);
  readonly TIEFLING= new Race(9, 'Tiefling', 30, [{attribute: Constants.attributes.CHARISMA, increaseValue: 2},{attribute: Constants.attributes.INTELLIGENCE, increaseValue: 1}], Constants.raceInfos.TIEFLING);

  private populateHumanAttributes(): CharacterAttribute[] {
    let humanAttributes: CharacterAttribute[] = [];
    for (let attr of Constants.attributes.getAttributes().reverse()) {
      humanAttributes.push({attribute: attr, increaseValue: 1})
    }
    return humanAttributes;
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
  readonly HILL_DWARF = new SubRace(Constants.races.DWARF.getRaceId(), 'Hill Dwarf', [{attribute: Constants.attributes.WISDOM, increaseValue: 1}], Constants.raceInfos.HILL_DWARF);
  readonly MOUNTAIN_DWARF = new SubRace(Constants.races.DWARF.getRaceId(), 'Mountain Dwarf', [{attribute: Constants.attributes.STRENGTH, increaseValue: 2}], Constants.raceInfos.MOUNTAIN_DWARF);
  readonly HIGH_ELF = new SubRace(Constants.races.ELF.getRaceId(), 'High Elf', [{attribute: Constants.attributes.INTELLIGENCE, increaseValue: 1}], Constants.raceInfos.HIGH_ELF);
  readonly WOOD_ELF = new SubRace(Constants.races.ELF.getRaceId(), 'Wood Elf', [{attribute: Constants.attributes.WISDOM, increaseValue: 1}], Constants.raceInfos.WOOD_ELF);
  readonly DARK_ELF = new SubRace(Constants.races.ELF.getRaceId(), 'Dark Elf (Drow)', [{attribute: Constants.attributes.CHARISMA, increaseValue: 1}], Constants.raceInfos.DARK_ELF);
  readonly LIGHT_FOOT_HALFLING = new SubRace(Constants.races.HALFLING.getRaceId(), 'Lightfoot Halfling', [{attribute: Constants.attributes.CHARISMA, increaseValue: 1}], Constants.raceInfos.LIGHT_FOOT_HALFLING);
  readonly STOUT_HALFLING = new SubRace(Constants.races.HALFLING.getRaceId(), 'Stout Halfling', [{attribute: Constants.attributes.CONSTITUTION, increaseValue: 1}], Constants.raceInfos.STOUT_HALFLING);
  readonly ROCK_GNOME = new SubRace(Constants.races.GNOME.getRaceId(), 'Rock Gnome', [{attribute: Constants.attributes.CONSTITUTION, increaseValue: 1}], Constants.raceInfos.ROCK_GNOME);
  readonly FOREST_GNOME = new SubRace(Constants.races.GNOME.getRaceId(), 'Forest Gnome', [{attribute: Constants.attributes.DEXTERITY, increaseValue: 1}], Constants.raceInfos.FOREST_GNOME);
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
  readonly BARBARIAN = new Class('Barbarian', 12, Constants.classInfos.BARBARIAN,2, [Constants.skills.ANIMAL_HANDLING, Constants.skills.ATHLETICS, Constants.skills.INTIMIDATION, Constants.skills.NATURE, Constants.skills.PERCEPTION, Constants.skills.SURVIVAL], [Constants.attributes.STRENGTH, Constants.attributes.CONSTITUTION]);
  readonly BARD = new Class('Bard', 12, Constants.classInfos.BARD,3, Constants.skills.getSkills(), [Constants.attributes.DEXTERITY, Constants.attributes.CHARISMA]);
  readonly CLERIC = new Class('Cleric', 12, Constants.classInfos.CLERIC,2,[Constants.skills.HISTORY, Constants.skills.INSIGHT, Constants.skills.MEDICINE,Constants.skills.PERSUASION, Constants.skills.RELIGION],[Constants.attributes.WISDOM, Constants.attributes.CHARISMA]);
  readonly DRUID = new Class('Druid', 12, Constants.classInfos.DRUID,2,[Constants.skills.ARCANA, Constants.skills.INSIGHT, Constants.skills.ANIMAL_HANDLING,Constants.skills.MEDICINE, Constants.skills.NATURE, Constants.skills.PERCEPTION,Constants.skills.RELIGION, Constants.skills.SURVIVAL],[Constants.attributes.INTELLIGENCE, Constants.attributes.WISDOM]);
  readonly FIGHTER = new Class('Fighter',12, Constants.classInfos.FIGHTER,2,[Constants.skills.ACROBATICS, Constants.skills.ANIMAL_HANDLING, Constants.skills.ATHLETICS,Constants.skills.HISTORY, Constants.skills.INSIGHT, Constants.skills.INTIMIDATION,Constants.skills.PERCEPTION, Constants.skills.SURVIVAL],[Constants.attributes.STRENGTH, Constants.attributes.CONSTITUTION]);
  readonly MONK = new Class('Monk', 12, Constants.classInfos.MONK,2,[Constants.skills.ACROBATICS, Constants.skills.ATHLETICS, Constants.skills.HISTORY,Constants.skills.INSIGHT, Constants.skills.RELIGION, Constants.skills.STEALTH],[Constants.attributes.STRENGTH, Constants.attributes.DEXTERITY]);
  readonly PALADIN = new Class('Paladin', 12, Constants.classInfos.PALADIN,2,[Constants.skills.ATHLETICS, Constants.skills.INSIGHT, Constants.skills.INTIMIDATION,Constants.skills.MEDICINE, Constants.skills.PERSUASION, Constants.skills.RELIGION],[Constants.attributes.WISDOM, Constants.attributes.CHARISMA]);
  readonly RANGER = new Class('Ranger', 12, Constants.classInfos.RANGER,3,[Constants.skills.ANIMAL_HANDLING, Constants.skills.ATHLETICS, Constants.skills.INSIGHT,Constants.skills.INVESTIGATION, Constants.skills.NATURE, Constants.skills.PERCEPTION,Constants.skills.STEALTH, Constants.skills.SURVIVAL],[Constants.attributes.STRENGTH, Constants.attributes.DEXTERITY]);
  readonly ROGUE = new Class('Rogue', 12, Constants.classInfos.ROGUE,4,[Constants.skills.ACROBATICS, Constants.skills.ATHLETICS, Constants.skills.DECEPTION,Constants.skills.INSIGHT, Constants.skills.INTIMIDATION, Constants.skills.INVESTIGATION,Constants.skills.PERCEPTION, Constants.skills.PERFORMANCE, Constants.skills.PERSUASION,Constants.skills.SLEIGHT_OF_HAND, Constants.skills.STEALTH],[Constants.attributes.DEXTERITY, Constants.attributes.INTELLIGENCE]);
  readonly SORCERER = new Class('Sorcerer', 12, Constants.classInfos.SORCERER,2,[Constants.skills.ARCANA, Constants.skills.DECEPTION, Constants.skills.INSIGHT,Constants.skills.INTIMIDATION, Constants.skills.PERSUASION, Constants.skills.RELIGION],[Constants.attributes.CONSTITUTION, Constants.attributes.CHARISMA]);
  readonly WARLOCK = new Class('Warlock', 12, Constants.classInfos.WARLOCK,2,[Constants.skills.ARCANA, Constants.skills.DECEPTION, Constants.skills.HISTORY,Constants.skills.INTIMIDATION, Constants.skills.INVESTIGATION, Constants.skills.NATURE,Constants.skills.RELIGION],[Constants.attributes.WISDOM, Constants.attributes.CHARISMA]);
  readonly WIZARD = new Class('Wizard', 12, Constants.classInfos.WIZARD,2,[Constants.skills.ARCANA, Constants.skills.HISTORY, Constants.skills.INSIGHT,Constants.skills.INVESTIGATION, Constants.skills.MEDICINE, Constants.skills.RELIGION],[Constants.attributes.INTELLIGENCE, Constants.attributes.WISDOM]);
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
  readonly ACOLYTE = new Background( 1, 'Acolyte', [Constants.skills.INSIGHT,Constants.skills.RELIGION]);
  readonly CHARLATAN = new Background( 2, 'Charlatan', [Constants.skills.DECEPTION,Constants.skills.SLEIGHT_OF_HAND]);
  readonly CRIMINAL = new Background( 3, 'Criminal', [Constants.skills.DECEPTION,Constants.skills.STEALTH]);
  readonly ENTERTAINER = new Background( 4, 'Entertainer', [Constants.skills.ACROBATICS,Constants.skills.PERFORMANCE]);
  readonly FOLK_HERO = new Background( 5, 'Folk Hero', [Constants.skills.ANIMAL_HANDLING,Constants.skills.SURVIVAL]);
  readonly GUILD_ARTISAN = new Background( 6, 'Guild Artisan', [Constants.skills.INSIGHT,Constants.skills.PERSUASION]);
  readonly HERMIT = new Background( 7, 'Hermit', [Constants.skills.MEDICINE,Constants.skills.RELIGION]);
  readonly NOBLE = new Background( 8, 'Noble', [Constants.skills.HISTORY,Constants.skills.PERSUASION]);
  readonly OUTLANDER = new Background( 9, 'Outlander', [Constants.skills.ATHLETICS,Constants.skills.SURVIVAL]);
  readonly SAGE = new Background(10, 'Sage', [Constants.skills.ARCANA,Constants.skills.HISTORY]);
  readonly SAILOR = new Background(11, 'Sailor', [Constants.skills.ATHLETICS,Constants.skills.PERCEPTION]);
  readonly SOLDIER = new Background(12, 'Soldier', [Constants.skills.ATHLETICS,Constants.skills.INTIMIDATION]);
  readonly URCHIN = new Background(13, 'Urchin', [Constants.skills.SLEIGHT_OF_HAND,Constants.skills.STEALTH]);
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

export class Constants {
  public static attributes = new Attributes();
  public static raceInfos = new RaceInfos();
  public static classInfos = new ClassInfos();
  public static races = new Races();
  public static subRaces = new SubRaces();
  public static skills = new Skills();
  public static backgrounds = new Backgrounds();
}
