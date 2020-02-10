import { Injectable } from '@angular/core';
import { CreateCharacterComponent } from "./create-character/create-character.component";
import { DialogService } from "../shared/services/dialog-service";
import {CharacterNameDialogComponent} from "./create-character/character-name-dialog/character-name-dialog.component";
import {Ui} from "../shared/services/ui.service";
import {Character} from "./characters.interfaces";
import {Attribute} from "../shared/constants/character/attributes";
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
  //       profSkills: [this.ui.skills.PERCEPTION],
  //       increaseAttributes: [],
  //     }
  //   ];
  // }

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
