import {Component, Input, OnInit} from '@angular/core';
import {CharactersStateService} from "../characters.state.service";
import {Character, CharacterConstants} from "../characters.interfaces";

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  @Input() character: Character;

  constructor(public state: CharactersStateService) { }

  ngOnInit() {
  }

  isSelected() {
    return this.character === this.state.selectedCharacter ? 'selected-card' : '';
  }

  public getRace(): string {
    let race = CharacterConstants.races.getRaceById(this.character.raceId);
    let raceName = race.getRaceName();
    if (race.hasSubRaces) {
      raceName = CharacterConstants.subRaces.getSubRaceById(this.character.subRaceId).getSubRaceName();
    }
    return raceName;
  }

  getClass() {
    return CharacterConstants.classes.getClassById(this.character.classId).className;
  }
}
