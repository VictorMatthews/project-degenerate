export class Constant {
  constructor(private val: string, private faIcon?: string, private faSet?: string) {
  }

  public getString(): string {
    return this.val;
  }

  public getFaIcon(): string {
    return this.faIcon;
  }

  public getFaSet(): string {
    return this.faSet;
  }
}

export class Constants {
  readonly HOME = new Constant('Home', 'fa-d-and-d', 'fab');//fa-dice-d20
  readonly WEAPONS = new Constant('Weapons', 'fa-gavel', 'fas');
  readonly CHARACTERS = new Constant('Characters', 'fa-dice-d20', 'fas');
}
