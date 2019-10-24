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
}
