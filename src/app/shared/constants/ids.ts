export class Id {
  constructor(private val: string, private className?: string) {
  }

  public getString(): string {
    return this.val;
  }

  public getClassName(): string {
    return this.className;
  }
}

export class Ids {
  readonly HOME = new Id('home', 'home');
  readonly WEAPONS = new Id('weapons', 'weapons');
  readonly CHARACTERS = new Id('characters', 'characters');
  readonly ATTRIBUTES = new Id('ATTRIBUTES', 'ATTRIBUTES');
  readonly SKILLS = new Id('SKILLS', 'SKILLS');

  readonly CHOOSE_BOND = new Id('Choose Bond', 'Choose Bond');
  readonly CHOOSE_FLAW = new Id('Choose Flaw', 'Choose Flaw');
  readonly CHOOSE_IDEAL = new Id('Choose Ideal', 'Choose Ideal');
  readonly CHOOSE_PERSONALITY_TRAIT = new Id('Choose Personality Trait', 'Choose Personality Trait');
}
