import {Component, Input, OnInit} from '@angular/core';
import {CharactersStateService} from "../characters.state.service";
import {Character} from "../characters.interfaces";
import {Ui} from "../../shared/services/ui.service";

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  @Input() character: Character;

  constructor(public ui: Ui, public state: CharactersStateService) { }

  ngOnInit() {
  }

  isSelected() {
    return this.character === this.state.selectedCharacter ? 'selected-card' : '';
  }

  public getRace(): string {
    let race = this.ui.races.getRaceById(this.character.raceId);
    let raceName = race.getRaceName();
    if (race.hasSubRaces) {
      raceName = this.ui.subRaces.getSubRaceById(this.character.subRaceId).getSubRaceName();
    }
    return raceName;
  }

  getClass() {
    return this.ui.classes.getClassById(this.character.classId).className;
  }
}
