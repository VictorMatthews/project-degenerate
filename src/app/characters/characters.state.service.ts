import { Injectable } from '@angular/core';
import {Alignment, Background, Character, CharacterConstants, Class, Race, SubRace} from "./characters.interfaces";
import { CreateCharacterComponent } from "./create-character/create-character.component";
import { DialogService } from "../shared/services/dialog-service";
import {CharacterNameDialogComponent} from "./create-character/character-name-dialog/character-name-dialog.component";
import {Ui} from "../shared/services/ui.service";

@Injectable({
  providedIn: 'root'
})
export class CharactersStateService {
  isCreatingCharacter: boolean = false;
  selectedCharacter: Character = null;
  createdCharacters: Character[] = [];

  race: Race;
  subRace: SubRace;
  characterClass: Class;
  alignment: Alignment;
  background: Background;

  constructor(public ui: Ui, private dialogService: DialogService) { }

  public createCharacter() {
    this.isCreatingCharacter = true;
    const dialog = this.dialogService.openFullScreen<CreateCharacterComponent>(CreateCharacterComponent);
    dialog.afterClosed().subscribe((newCharacter: Character) => {
      if (!this.ui.isNullOrUndefined(newCharacter)) {
        const dialog = this.dialogService.open<CharacterNameDialogComponent>(CharacterNameDialogComponent, {width: '250px', disableClose: true});
        dialog.afterClosed().subscribe((name: string) => {
          newCharacter.setCharacterName(name);
          this.selectedCharacter = newCharacter;
          this.createdCharacters.push(newCharacter);
        });
      }
    });
  }

  // public loadCharacters() {
  //   this.createdCharacters = [
  //     {
  //       isCharacterComplete: true,
  //       characterName: 'Aifur Gott',
  //       background: 'Criminal',
  //       race: 'Gnome',
  //       subRace: 'Forest Gnome',
  //       className: 'Bard',
  //       alignment: 'Neutral Good',
  //       classLevel: '1',
  //       experience: '0',
  //
  //       strength: 8,
  //       dexterity: 14,
  //       constitution: 14,
  //       intelligence: 14,
  //       wisdom: 12,
  //       charisma: 14,
  //
  //       personalityTrait: 'I do whatever I can to help the group over everything else.',
  //       ideals: 'People. I\'m loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)',
  //       bonds: 'My ill-gotten gains go to support my family.',
  //       flaws: 'When I see something valuable, I can\'t think about anything but how to steal it.',
  //
  //       profSkills: [CharacterConstants.skills.PERCEPTION],
  //       increaseAttributes: [],
  //     }
  //   ];
  // }

  public selectFirstCharacter() {
    if (this.createdCharacters.length !== 0) {
      this.selectedCharacter = this.createdCharacters[0];
    }
  }

  public selectCharacter(character: Character): void {
    this.selectedCharacter = character;
    this.race = CharacterConstants.races.getRaceById(character.getRaceId());
    this.subRace = CharacterConstants.subRaces.getSubRaceById(character.getSubRaceId());
    this.characterClass = CharacterConstants.classes.getClassById(character.getClassId());
    this.alignment = CharacterConstants.alignments.getAlignmentById(character.getAlignmentId());
    this.background = CharacterConstants.backgrounds.getBackgroundById(character.getBackgroundId());
  }
}
