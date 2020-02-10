import {Attribute, Attributes} from "./attributes";

export interface CharacterAttribute {
  attribute: Attribute;
  increaseValue: number;
}

export class RaceInfo {
  constructor(readonly raceName: string, readonly age?: string,
              readonly alignment?: string, readonly size?: string, readonly speed?: string) {
    this.raceName = raceName;
    this.age = age;
    this.alignment = alignment;
    this.size = size;
    this.speed = speed;
  }
}

export class RaceInfos {
  readonly DWARF = new RaceInfo('Dwarf', 'Dwarves mature at the same rate as humans, but they are considered young until they reach the age of 50. On average, they live about 350 years.', 'Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of Fair Play and a belief that everyone deserves to share in the benefits of a just order.', 'Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.', 'Your speed is not reduced by wearing Heavy Armor.');
  readonly ELF = new RaceInfo('Elf', 'Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.', 'Elves love freedom, variety, and self- expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others freedom as well as their own, and they are more often good than not.', 'Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.');
  readonly HALFLING = new RaceInfo('Halfling', 'A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.', 'Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.', 'Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.');
  readonly HUMAN = new RaceInfo('Human', 'Humans reach adulthood in their late teens and live less than a century.', 'Humans tend toward no particular alignment. The best and the worst are found among them.', 'Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.');
  readonly DRAGONBORN = new RaceInfo('Dragonborn', 'Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.', 'Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.', 'Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.');
  readonly GNOME = new RaceInfo('Gnome', 'Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.', 'Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious.', 'Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.');
  readonly HALF_ELF = new RaceInfo('Half Elf', 'Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.', 'Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent othersâ demands, and sometimes prove unreliable, or at least unpredictable.', 'Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.');
  readonly HALF_ORC = new RaceInfo('Half Orc', 'Half-Orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.', 'Half-Orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-Orcs raised among orcs and willing to live out their lives among them are usually evil.', 'Half-Orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.');
  readonly TIEFLING = new RaceInfo('Tiefling', 'Tieflings mature at the same rate as humans but live a few years longer.', 'Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment.', 'Tieflings are about the same size and build as humans. Your size is Medium.');
  readonly HILL_DWARF = new RaceInfo('Hill Dwarf');
  readonly MOUNTAIN_DWARF = new RaceInfo('Mountain Dwarf');
  readonly HIGH_ELF = new RaceInfo('High Elf');
  readonly WOOD_ELF = new RaceInfo('Wood Elf');
  readonly DARK_ELF = new RaceInfo('Dark Elf');
  readonly LIGHT_FOOT_HALFLING = new RaceInfo('Lightfoot Halfling');
  readonly STOUT_HALFLING = new RaceInfo('Stout Halfling');
  readonly ROCK_GNOME = new RaceInfo('Rock Gnome');
  readonly FOREST_GNOME = new RaceInfo('Forest Gnome');
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
  readonly attributes = new Attributes();
  readonly raceInfos = new RaceInfos();
  readonly DWARF = new Race(1, 'Dwarf', 25, [{attribute: this.attributes.CONSTITUTION, increaseValue: 2}], this.raceInfos.DWARF, true);
  readonly ELF = new Race(2, 'Elf', 30, [{attribute: this.attributes.DEXTERITY, increaseValue: 2}], this.raceInfos.ELF, true);
  readonly HALFLING = new Race(3, 'Halfling', 25, [{attribute: this.attributes.DEXTERITY, increaseValue: 2}], this.raceInfos.HALFLING, true);
  readonly HUMAN = new Race(4, 'Human', 30, this.populateHumanAttributes(), this.raceInfos.HUMAN, false);
  readonly DRAGONBORN = new Race(5, 'Dragonborn', 30, [{attribute: this.attributes.STRENGTH, increaseValue: 2},{attribute: this.attributes.CHARISMA, increaseValue: 1}], this.raceInfos.DRAGONBORN, false);
  readonly GNOME = new Race(6, 'Gnome', 25, [{attribute: this.attributes.INTELLIGENCE, increaseValue: 2}], this.raceInfos.GNOME, true);
  readonly HALF_ELF = new Race(7, 'Half Elf', 30, [{attribute: this.attributes.CHARISMA, increaseValue: 2}], this.raceInfos.HALF_ELF, false);
  readonly HALF_ORC = new Race(8, 'Half Orc', 30, [{attribute: this.attributes.STRENGTH, increaseValue: 2},{attribute: this.attributes.CONSTITUTION, increaseValue: 1}], this.raceInfos.HALF_ORC, false);
  readonly TIEFLING= new Race(9, 'Tiefling', 30, [{attribute: this.attributes.CHARISMA, increaseValue: 2},{attribute: this.attributes.INTELLIGENCE, increaseValue: 1}], this.raceInfos.TIEFLING, false);

  readonly raceMap = new Map([
    [ this.DWARF.getRaceId(), this.DWARF ],
    [ this.ELF.getRaceId(), this.ELF ],
    [ this.HALFLING.getRaceId(), this.HALFLING ],
    [ this.HUMAN.getRaceId(), this.HUMAN ],
    [ this.DRAGONBORN.getRaceId(), this.DRAGONBORN ],
    [ this.GNOME.getRaceId(), this.GNOME ],
    [ this.HALF_ELF.getRaceId(), this.HALF_ELF ],
    [ this.HALF_ORC.getRaceId(), this.HALF_ORC ],
    [ this.TIEFLING.getRaceId(), this.TIEFLING ],
  ]);

  private populateHumanAttributes(): CharacterAttribute[] {
    let humanAttributes: CharacterAttribute[] = [];
    for (let attr of this.attributes.getAttributes().reverse()) {
      humanAttributes.push({attribute: attr, increaseValue: 1})
    }
    return humanAttributes;
  }

  public getRaces(): Race[] {
    return [this.DWARF, this.ELF, this.HALFLING, this.HUMAN, this.DRAGONBORN, this.GNOME, this.HALF_ELF, this.HALF_ORC, this.TIEFLING];
  }

  getRaceById(raceId: number): Race {
    return this.raceMap.get(raceId);
  }
}

export class SubRace {
  constructor(readonly subRaceId: number, readonly raceId?: number, readonly raceName?: string, readonly increaseAttribute?: CharacterAttribute[], readonly raceInfo?: RaceInfo) {
    this.subRaceId = subRaceId;
    this.raceId = raceId;
    this.raceName = raceName;
    this.increaseAttribute = increaseAttribute;
    this.raceInfo = raceInfo;
  }

  public getSubRaceName(): string {
    return this.raceName;
  }

  public getSubRaceId(): number {
    return this.subRaceId;
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
  readonly races = new Races();
  readonly attributes = new Attributes();
  readonly raceInfos = new RaceInfos();
  readonly NO_SUBRACE = new SubRace(0, 0);
  readonly HILL_DWARF = new SubRace(1, this.races.DWARF.getRaceId(), 'Hill Dwarf', [{attribute: this.attributes.WISDOM, increaseValue: 1}], this.raceInfos.HILL_DWARF);
  readonly MOUNTAIN_DWARF = new SubRace(2, this.races.DWARF.getRaceId(), 'Mountain Dwarf', [{attribute: this.attributes.STRENGTH, increaseValue: 2}], this.raceInfos.MOUNTAIN_DWARF);
  readonly HIGH_ELF = new SubRace(3, this.races.ELF.getRaceId(), 'High Elf', [{attribute: this.attributes.INTELLIGENCE, increaseValue: 1}], this.raceInfos.HIGH_ELF);
  readonly WOOD_ELF = new SubRace(4, this.races.ELF.getRaceId(), 'Wood Elf', [{attribute: this.attributes.WISDOM, increaseValue: 1}], this.raceInfos.WOOD_ELF);
  readonly DARK_ELF = new SubRace(5, this.races.ELF.getRaceId(), 'Dark Elf (Drow)', [{attribute: this.attributes.CHARISMA, increaseValue: 1}], this.raceInfos.DARK_ELF);
  readonly LIGHT_FOOT_HALFLING = new SubRace(6, this.races.HALFLING.getRaceId(), 'Lightfoot Halfling', [{attribute: this.attributes.CHARISMA, increaseValue: 1}], this.raceInfos.LIGHT_FOOT_HALFLING);
  readonly STOUT_HALFLING = new SubRace(7, this.races.HALFLING.getRaceId(), 'Stout Halfling', [{attribute: this.attributes.CONSTITUTION, increaseValue: 1}], this.raceInfos.STOUT_HALFLING);
  readonly ROCK_GNOME = new SubRace(8, this.races.GNOME.getRaceId(), 'Rock Gnome', [{attribute: this.attributes.CONSTITUTION, increaseValue: 1}], this.raceInfos.ROCK_GNOME);
  readonly FOREST_GNOME = new SubRace(9, this.races.GNOME.getRaceId(), 'Forest Gnome', [{attribute: this.attributes.DEXTERITY, increaseValue: 1}], this.raceInfos.FOREST_GNOME);

  readonly subRaceMap = new Map([
    [ this.NO_SUBRACE.getSubRaceId(), this.NO_SUBRACE ],
    [ this.HILL_DWARF.getSubRaceId(), this.HILL_DWARF ],
    [ this.MOUNTAIN_DWARF.getSubRaceId(), this.MOUNTAIN_DWARF ],
    [ this.HIGH_ELF.getSubRaceId(), this.HIGH_ELF ],
    [ this.WOOD_ELF.getSubRaceId(), this.WOOD_ELF ],
    [ this.DARK_ELF.getSubRaceId(), this.DARK_ELF ],
    [ this.LIGHT_FOOT_HALFLING.getSubRaceId(), this.LIGHT_FOOT_HALFLING ],
    [ this.STOUT_HALFLING.getSubRaceId(), this.STOUT_HALFLING ],
    [ this.ROCK_GNOME.getSubRaceId(), this.ROCK_GNOME ],
    [ this.FOREST_GNOME.getSubRaceId(), this.FOREST_GNOME ],
  ]);

  readonly subRacesMap = new Map([
    [ this.races.DWARF.getRaceId(), [this.HILL_DWARF, this.MOUNTAIN_DWARF] ],
    [ this.races.ELF.getRaceId(), [this.HIGH_ELF, this.WOOD_ELF, this.DARK_ELF] ],
    [ this.races.HALFLING.getRaceId(), [this.LIGHT_FOOT_HALFLING, this.STOUT_HALFLING] ],
    [ this.races.GNOME.getRaceId(), [this.ROCK_GNOME, this.FOREST_GNOME] ],
  ]);

  public getSubRaces(raceId?: number): SubRace[] {
    if (raceId) {
      return this.subRacesMap.get(raceId);
    }
    return [this.NO_SUBRACE, this.HILL_DWARF, this.MOUNTAIN_DWARF, this.HIGH_ELF, this.WOOD_ELF, this.DARK_ELF, this.LIGHT_FOOT_HALFLING, this.STOUT_HALFLING, this.ROCK_GNOME, this.FOREST_GNOME];
  }

  getSubRaceById(subRaceId: number) {
    return this.subRaceMap.get(subRaceId);
  }
}
