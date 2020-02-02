import { Component, OnInit } from '@angular/core';
import {Character, CharacterConstants, Class, Race, Races, SubRace} from "../characters.interfaces";
import { Ui } from "../../shared/services/ui.service";
import { Constant } from "../../shared/constants/constants";

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss']
})
export class CreateCharacterComponent implements OnInit {
  newCharacter: Character;
  currentChoice: number = 0;
  choiceMap: Map<number, Constant> = new Map;
  selectedRace: Race;
  selectedSubRace: SubRace;
  selectedClass: Class;
  races: Race[] = CharacterConstants.races.getRaces();

  constructor(public ui: Ui) { }

  ngOnInit() {
    this.choiceMap.set(0, this.ui.CONSTANTS.RACE);
    this.choiceMap.set(1, this.ui.CONSTANTS.SUB_RACE);
    this.choiceMap.set(2, this.ui.CONSTANTS.CLASS);
    this.choiceMap.set(3, this.ui.CONSTANTS.BACKGROUND);
    this.choiceMap.set(4, this.ui.CONSTANTS.ATTRIBUTES_SKILLS);
  }

  next() {
    let next = 1;
    if (this.choiceMap.get(this.currentChoice) === this.ui.CONSTANTS.RACE
      && !this.ui.isNullOrUndefined(this.selectedRace) && !this.selectedRace.getHasSubRaces()) {
      next = 2;
    }
    if (this.canGoForward()) {
      this.currentChoice = this.currentChoice + next;
    }
  }

  previous() {
    let prev = 1;
    if (this.choiceMap.get(this.currentChoice) === this.ui.CONSTANTS.CLASS
      && !this.ui.isNullOrUndefined(this.selectedRace) && !this.selectedRace.getHasSubRaces()) {
      prev = 2;
    }
    if (this.canGoBack()) {
      this.currentChoice = this.currentChoice - prev;
    }
  }

  canGoBack() {
    if (this.currentChoice > 0) {
      return true;
    }
    return false;
  }

  canGoForward() {
    if (this.currentChoice < 4) {
      return true;
    }
    return false;
  }

  readyToFinish() {
    return false;
  }
}
