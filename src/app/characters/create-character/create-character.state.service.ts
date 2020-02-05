import { Injectable } from '@angular/core';
import {
  Attribute,
  Background,
  Bond,
  Character,
  CharacterConstants,
  Class,
  Flaw,
  Ideal, PersonalityTrait,
  Race,
  SubRace
} from "../characters.interfaces";
import {Constant} from "../../shared/constants/constants";
import {Ui} from "../../shared/services/ui.service";

@Injectable({
  providedIn: 'root'
})
export class CreateCharacterStateService {
  newCharacter: Character;
  currentChoice: number = 0;
  choiceMap: Map<number, Constant> = new Map;
  selectedRace: Race;
  selectedSubRace: SubRace;
  selectedClass: Class;
  selectedBackground: Background;
  selectedBond: Bond;
  selectedFlaw: Flaw;
  selectedIdeal: Ideal;
  selectedPersonalityTrait: PersonalityTrait;
  races: Race[] = CharacterConstants.races.getRaces();
  subRaces: SubRace[];
  classes: Class[] = CharacterConstants.classes.getClasses();
  backgrounds: Background[] = CharacterConstants.backgrounds.getBackgrounds();
  bonds: Bond[];
  flaws: Flaw[];
  ideals: Ideal[];
  personalityTraits: PersonalityTrait[];
  attributes: Attribute[] = CharacterConstants.attributes.getAttributes();
  attributePoints: number = 27;

  constructor(public ui: Ui) { }

  clearData() {
    this.newCharacter = null;
    this.currentChoice = 0;
    this.selectedRace = null;
    this.selectedSubRace = null;
    this.selectedClass = null;
    this.selectedBackground = null;
    this.selectedBond = null;
    this.selectedFlaw = null;
    this.selectedIdeal = null;
    this.selectedPersonalityTrait = null;
    this.bonds = null;
    this.flaws = null;
    this.ideals = null;
    this.personalityTraits = null;
    if (this.choiceMap.size === 0) {
      this.setupChoiceMap();
    }
    this.attributePoints = 27;
  }

  setupChoiceMap() {
    this.choiceMap.set(0, this.ui.CONSTANTS.RACE);
    this.choiceMap.set(1, this.ui.CONSTANTS.SUB_RACE);
    this.choiceMap.set(2, this.ui.CONSTANTS.CLASS);
    this.choiceMap.set(3, this.ui.CONSTANTS.BACKGROUND);
    this.choiceMap.set(4, this.ui.CONSTANTS.ATTRIBUTES_SKILLS);
  }

  next() {
    let next = 1;
    if (this.getCurrentChoice() === this.ui.CONSTANTS.RACE
      && !this.ui.isNullOrUndefined(this.selectedRace) && !this.selectedRace.getHasSubRaces()) {
      next = 2;
    }
    if (this.canGoForward()) {
      this.currentChoice = this.currentChoice + next;
    }
  }

  previous() {
    let prev = 1;
    if (this.getCurrentChoice() === this.ui.CONSTANTS.CLASS
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
      // if (this.getCurrentChoice() === this.ui.CONSTANTS.RACE && this.ui.isNullOrUndefined(this.selectedRace)) {
      //   return false;
      // } else if (this.getCurrentChoice() === this.ui.CONSTANTS.SUB_RACE && this.ui.isNullOrUndefined(this.selectedSubRace)) {
      //   return false;
      // } else if (this.getCurrentChoice() === this.ui.CONSTANTS.CLASS && this.ui.isNullOrUndefined(this.selectedClass)) {
      //   return false;
      // } else if (this.getCurrentChoice() === this.ui.CONSTANTS.BACKGROUND && this.ui.isNullOrUndefined(this.selectedBackground)) {
      //   return false;
      // }
      return true;
    }
    return false;
  }

  readyToFinish() {
    return false;
  }

  selectRace(race: Race) {
    this.selectedRace = race;
    this.subRaces = CharacterConstants.subRaces.getSubRaces(race);
    this.selectedSubRace = null;
    // this.newCharacter.race = race.raceName;
  }

  selectSubRace(subRace: SubRace) {
    this.selectedSubRace = subRace;
    // this.newCharacter.subRace = this.selectedSubRace.raceName;
  }

  selectClass(selectedClass: Class) {
    this.selectedClass = selectedClass;
    // this.newCharacter.className = this.selectedClass.className;
  }

  selectBackground(background: Background) {
    this.selectedBackground = background;
    this.bonds = CharacterConstants.bonds.getBonds(this.selectedBackground);
    this.flaws = CharacterConstants.flaws.getFlaws(this.selectedBackground);
    this.ideals = CharacterConstants.ideals.getIdeals(this.selectedBackground);
    this.personalityTraits = CharacterConstants.personalityTraits.getPersonalityTraits(this.selectedBackground);
    // this.newCharacter.background = this.selectedBackground.backgroundName;
  }

  getCurrentChoice() {
    return this.choiceMap.get(this.currentChoice);
  }

  selectBond(bond: Bond) {
    this.selectedBond = bond;
    // this.newCharacter.bonds = bond.bond;
  }

  selectFlaw(flaw: Flaw) {
    this.selectedFlaw = flaw;
    // this.newCharacter.flaws = flaw.flaw;
  }

  selectIdeal(ideal: Ideal) {
    this.selectedIdeal = ideal;
    // this.newCharacter.ideals = ideal.ideal;
  }

  selectPersonalityTrait(personalityTrait: PersonalityTrait) {
    this.selectedPersonalityTrait = personalityTrait;
    // this.newCharacter.personalityTrait = personalityTrait.personalityTrait;
  }
}
