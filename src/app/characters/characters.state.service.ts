import { Injectable } from '@angular/core';
import { CreateCharacterComponent } from "./create-character/create-character.component";
import { DialogService } from "../shared/services/dialog-service";
import {CharacterNameDialogComponent} from "./create-character/character-name-dialog/character-name-dialog.component";
import {Ui} from "../shared/services/ui.service";
import {Character} from "./characters.interfaces";
import {Race, SubRace} from "../shared/constants/character/races";
import {Class} from "../shared/constants/character/classes";
import {Alignment} from "../shared/constants/character/alignments";
import {Background} from "../shared/constants/character/backgrounds";

@Injectable({
  providedIn: 'root'
})
export class CharactersStateService {
  selectedCharacter: Character = null;
  createdCharacters: Character[] = [];

  attributeIncMap: Map<number, number> = new Map;

  race: Race;
  subRace: SubRace;
  characterClass: Class;
  alignment: Alignment;
  background: Background;



  constructor(public ui: Ui, private dialogService: DialogService) { }

  public createCharacter() {
    this.dialogService.openFullScreen<CreateCharacterComponent>(CreateCharacterComponent);
  }

  public promptForCharacterNameAndFinishCharacter(newCharacter: Character): void {
    const dialog = this.dialogService.open<CharacterNameDialogComponent>(CharacterNameDialogComponent, {width: '500px', disableClose: true});
    dialog.afterClosed().subscribe((name: string) => {
      newCharacter.characterName = name;
      this.createdCharacters.push(newCharacter);
      this.selectCharacter(newCharacter);
    });
  }

  public loadCharacters() {
    // this.createdCharacters = [
    //   {
    //     characterName: 'Urlicher',
    //     raceId: 1,
    //     subRaceId: 2,
    //     classId: 5,
    //     alignmentId: 3,
    //     backgroundId: 12,
    //     strength: 14,
    //     dexterity: 12,
    //     constitution: 14,
    //     intelligence: 10,
    //     wisdom: 12,
    //     charisma: 11,
    //     personalityTraits: 'I\'ve lost too many friends, and I\'m slow to make new ones.',
    //     ideals: 'Responsibility. I do what I must and obey just authority. (Lawful)',
    //     bonds: 'I would lay down my life for the people I served with.',
    //     flaws: 'My hatred of my enemies is blind and unreasoning.',
    //     profSkillIds: [4,8,12,18]
    //   }
    // ];
  }

  selectFirstCharacter() {
    // this.selectCharacter(this.createdCharacters[0]);
  }

  public selectCharacter(character: Character): void {
    this.selectedCharacter = character;
    this.race = this.ui.races.getRaceById(character.raceId);
    this.subRace = this.ui.subRaces.getSubRaceById(character.subRaceId);
    this.characterClass = this.ui.classes.getClassById(character.classId);
    this.alignment = this.ui.alignments.getAlignmentById(character.alignmentId);
    this.background = this.ui.backgrounds.getBackgroundById(character.backgroundId);
    this.populateMap();
  }

  private populateMap(): void {
    this.attributeIncMap.clear();
    for (let ca of this.race.getIncreaseAttribute()) {
      this.attributeIncMap.set(ca.attribute.getId(), ca.increaseValue);
    }
    if (this.race.hasSubRaces) {
      for (let ca of this.subRace.getIncreaseAttribute()) {
        this.attributeIncMap.set(ca.attribute.getId(), ca.increaseValue);
      }
    }
  }

  public getRace(): string {
    let race = this.race.getRaceName();
    if (this.race.hasSubRaces) {
      race = this.subRace.getSubRaceName();
    }
    return race;
  }
}
