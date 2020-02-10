import {Attribute, Attributes} from "./attributes";

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

  public equals(other: Skill) {
    return other !== undefined && other.id === this.id && other.name === this.name;
  }

  public toString() {
    return this.name;
  }
}

export class Skills {
  readonly attributes = new Attributes();
  readonly ACROBATICS = new Skill( 1, 'Acrobatics', this.attributes.DEXTERITY);
  readonly ANIMAL_HANDLING = new Skill( 2, 'Animal Handling', this.attributes.WISDOM);
  readonly ARCANA = new Skill( 3, 'Arcana', this.attributes.INTELLIGENCE);
  readonly ATHLETICS = new Skill( 4, 'Athletics', this.attributes.STRENGTH);
  readonly DECEPTION = new Skill( 5, 'Deception', this.attributes.CHARISMA);
  readonly HISTORY = new Skill( 6, 'History', this.attributes.INTELLIGENCE);
  readonly INSIGHT = new Skill( 7, 'Insight', this.attributes.WISDOM);
  readonly INTIMIDATION = new Skill( 8, 'Intimidation', this.attributes.CHARISMA);
  readonly INVESTIGATION = new Skill( 9, 'Investigation', this.attributes.INTELLIGENCE);
  readonly MEDICINE = new Skill(10, 'Medicine', this.attributes.WISDOM);
  readonly NATURE = new Skill(11, 'Nature', this.attributes.INTELLIGENCE);
  readonly PERCEPTION = new Skill(12, 'Perception', this.attributes.WISDOM);
  readonly PERFORMANCE = new Skill(13, 'Performance', this.attributes.CHARISMA);
  readonly PERSUASION = new Skill(14, 'Persuasion', this.attributes.CHARISMA);
  readonly RELIGION = new Skill(15, 'Religion', this.attributes.INTELLIGENCE);
  readonly SLEIGHT_OF_HAND = new Skill(16, 'Sleight of Hand', this.attributes.DEXTERITY);
  readonly STEALTH = new Skill(17, 'Stealth', this.attributes.DEXTERITY);
  readonly SURVIVAL = new Skill(18, 'Survival', this.attributes.WISDOM);

  public getSkills(): Skill[] {
    return [this.ACROBATICS, this.ANIMAL_HANDLING, this.ARCANA, this.ATHLETICS, this.DECEPTION, this.HISTORY,
      this.INSIGHT, this.INTIMIDATION, this.INVESTIGATION, this.MEDICINE, this.NATURE, this.PERCEPTION,
      this.PERFORMANCE, this.PERSUASION, this.RELIGION, this.SLEIGHT_OF_HAND, this.STEALTH, this.SURVIVAL];
  }
}
