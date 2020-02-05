import { Injectable } from '@angular/core';
import { Character, CharacterConstants } from "./characters.interfaces";
import { CreateCharacterComponent } from "./create-character/create-character.component";
import { DialogService } from "../shared/services/dialog-service";

@Injectable({
  providedIn: 'root'
})
export class CharactersStateService {
  isCreatingCharacter: boolean = false;
  selectedCharacter: Character = null;
  createdCharacters: Character[] = [];

  constructor(private dialogService: DialogService) { }

  public createCharacter() {
    this.isCreatingCharacter = true;
    const dialog = this.dialogService.openFullScreen<CreateCharacterComponent>(CreateCharacterComponent);
    dialog.afterClosed().subscribe((newCharacter: Character) => {
      if (this.newCharacterComplete(newCharacter)) {
        this.selectedCharacter = newCharacter;
        this.createdCharacters.push(newCharacter);
      }
    });
  }

  public loadCharacters() {
    this.createdCharacters = [
      {
        isCharacterComplete: true,
        characterName: 'Aifur Gott',
        background: 'Criminal',
        race: 'Gnome',
        subRace: 'Forest Gnome',
        className: 'Bard',
        alignment: 'Neutral Good',
        classLevel: '1',
        experience: '0',

        strength: 8,
        dexterity: 14,
        constitution: 14,
        intelligence: 14,
        wisdom: 12,
        charisma: 14,

        personalityTrait: 'I do whatever I can to help the group over everything else.',
        ideals: 'People. I\'m loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)',
        bonds: 'My ill-gotten gains go to support my family.',
        flaws: 'When I see something valuable, I can\'t think about anything but how to steal it.',

        profSkills: [CharacterConstants.skills.PERCEPTION],
        increaseAttributes: [],
      }
    ];
  }

  public selectFirstCharacter() {
    if (this.createdCharacters.length !== 0) {
      this.selectedCharacter = this.createdCharacters[0];
    }
  }

  newCharacterComplete(newCharacter: Character) {
    if (newCharacter !== undefined && newCharacter !== null) {
      return newCharacter.isCharacterComplete;
    }
    return false;
  }
}
