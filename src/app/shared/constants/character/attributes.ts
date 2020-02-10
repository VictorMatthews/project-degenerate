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
