import { Injectable } from '@angular/core';
import {
  Alignment,
  Attribute,
  Background,
  Bond,
  Character, CharacterAttribute,
  CharacterConstants,
  Class,
  Flaw,
  Ideal, PersonalityTrait,
  Race, Skill,
  SubRace
} from "../characters.interfaces";
import {Constant} from "../../shared/constants/constants";
import {Ui} from "../../shared/services/ui.service";
import {EventHub} from "../../shared/services/EventHub";

@Injectable({
  providedIn: 'root'
})
export class CreateCharacterStateService {
  newCharacter: Character;
  currentChoice: number = 0;
  attributePoints: number = 27;
  skillPoints: number;

  choiceMap: Map<number, Constant> = new Map;
  attributeValueMap: Map<Attribute, number> = new Map;
  attributeIncMap: Map<Attribute, number> = new Map;
  selectedSkillsMap: Map<Skill, boolean> = new Map;

  races: Race[] = CharacterConstants.races.getRaces();
  classes: Class[] = CharacterConstants.classes.getClasses();
  backgrounds: Background[] = CharacterConstants.backgrounds.getBackgrounds();
  attributes: Attribute[] = CharacterConstants.attributes.getAttributes();
  skills: Skill[] = CharacterConstants.skills.getSkills();
  alignments: Alignment[] = CharacterConstants.alignments.getAlignments();

  selectedRace: Race;
  selectedSubRace: SubRace;
  selectedClass: Class;
  selectedAlignment: Alignment;
  selectedBackground: Background;
  selectedBond: Bond;
  selectedFlaw: Flaw;
  selectedIdeal: Ideal;
  selectedPersonalityTrait: PersonalityTrait;

  subRaces: SubRace[];
  bonds: Bond[];
  flaws: Flaw[];
  ideals: Ideal[];
  personalityTraits: PersonalityTrait[];

  constructor(public ui: Ui, private eventHub: EventHub) { }

  clearData() {
    this.newCharacter = null;
    this.currentChoice = 0;
    this.selectedRace = null;
    this.selectedSubRace = null;
    this.selectedClass = null;
    this.selectedBackground = null;
    this.selectedAlignment = null;
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
    this.skillPoints = 0;
    this.attributeValueMap.clear();
    this.attributeIncMap.clear();
    this.selectedSkillsMap.clear();
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
      if (this.getCurrentChoice() === this.ui.CONSTANTS.RACE && this.ui.isNullOrUndefined(this.selectedRace)) {
        return false;
      } else if (this.getCurrentChoice() === this.ui.CONSTANTS.SUB_RACE && this.ui.isNullOrUndefined(this.selectedSubRace)) {
        return false;
      } else if (this.getCurrentChoice() === this.ui.CONSTANTS.CLASS && this.ui.isNullOrUndefined(this.selectedClass)) {
        return false;
      } else if (this.getCurrentChoice() === this.ui.CONSTANTS.BACKGROUND && this.ui.isNullOrUndefined(this.selectedBackground)) {
        return false;
      }
      return true;
    }
    return false;
  }

  readyToFinish() {
    if (this.ui.isNullOrUndefined(this.selectedRace)) {
      return false;
    }
    if (this.selectedRace.hasSubRaces && this.ui.isNullOrUndefined(this.selectedSubRace)) {
      return false;
    }
    if (this.ui.isNullOrUndefined(this.selectedClass)) {
      return false;
    }
    if (this.ui.isNullOrUndefined(this.selectedBackground)) {
      return false;
    }
    if (this.ui.isNullOrUndefined(this.selectedBond)) {
      return false;
    }
    if (this.ui.isNullOrUndefined(this.selectedFlaw)) {
      return false;
    }
    if (this.ui.isNullOrUndefined(this.selectedIdeal)) {
      return false;
    }
    if (this.ui.isNullOrUndefined(this.selectedPersonalityTrait)) {
      return false;
    }
    if (this.ui.isNullOrUndefined(this.selectedAlignment)) {
      return false;
    }
    if (this.attributePoints !== 0) {
      return false;
    }
    if (this.skillPoints !== 0) {
      return false;
    }
    return true;
  }

  selectRace(race: Race) {
    this.selectedRace = race;
    this.subRaces = CharacterConstants.subRaces.getSubRaces(race.getRaceId());
    this.selectedSubRace = null;
    this.attributeIncMap.clear();
  }

  selectSubRace(subRace: SubRace) {
    this.selectedSubRace = subRace;
  }

  selectClass(selectedClass: Class) {
    this.selectedClass = selectedClass;
    this.skillPoints = selectedClass.classInfo.profSkillsToChoose;
    this.selectedSkillsMap.clear();
  }

  selectBackground(background: Background) {
    this.selectedBackground = background;
    this.bonds = CharacterConstants.bonds.getBonds(this.selectedBackground);
    this.flaws = CharacterConstants.flaws.getFlaws(this.selectedBackground);
    this.ideals = CharacterConstants.ideals.getIdeals(this.selectedBackground);
    this.personalityTraits = CharacterConstants.personalityTraits.getPersonalityTraits(this.selectedBackground);
    this.selectedBond = null;
    this.selectedFlaw = null;
    this.selectedIdeal = null;
    this.selectedPersonalityTrait = null;
  }

  getCurrentChoice() {
    return this.choiceMap.get(this.currentChoice);
  }

  selectBond(bond: Bond) {
    this.selectedBond = bond;
  }

  selectFlaw(flaw: Flaw) {
    this.selectedFlaw = flaw;
  }

  selectIdeal(ideal: Ideal) {
    this.selectedIdeal = ideal;
  }

  selectPersonalityTrait(personalityTrait: PersonalityTrait) {
    this.selectedPersonalityTrait = personalityTrait;
  }

  selectAlignment(alignment: Alignment) {
    this.selectedAlignment = alignment;
  }

  public finish(): void {
    this.newCharacter = new Character();
    // this.newCharacter.setRaceId(this.selectedRace.getRaceId());
    // if (this.selectedRace.getHasSubRaces()) {
    //   this.newCharacter.setSubRaceId(this.selectedSubRace.getSubRaceId());
    // }
    // this.newCharacter.setClassId(this.selectedClass.getClassId());
    // this.newCharacter.setAlignmentId(this.selectedAlignment.getAlignmentId());
    // this.newCharacter.setBackgroundId(this.selectedBackground.getBackgroundId());
    // this.newCharacter.setBonds(this.selectedBond.bond);
    // this.newCharacter.setFlaws(this.selectedFlaw.flaw);
    // this.newCharacter.setIdeals(this.selectedIdeal.ideal);
    // this.newCharacter.setPersonalityTrait(this.selectedPersonalityTrait.personalityTrait);
    // this.newCharacter.setStrength(this.attributeValueMap.get(CharacterConstants.attributes.STRENGTH));
    // this.newCharacter.setDexterity(this.attributeValueMap.get(CharacterConstants.attributes.DEXTERITY));
    // this.newCharacter.setConstitution(this.attributeValueMap.get(CharacterConstants.attributes.CONSTITUTION));
    // this.newCharacter.setIntelligence(this.attributeValueMap.get(CharacterConstants.attributes.INTELLIGENCE));
    // this.newCharacter.setWisdom(this.attributeValueMap.get(CharacterConstants.attributes.WISDOM));
    // this.newCharacter.setCharisma(this.attributeValueMap.get(CharacterConstants.attributes.CHARISMA));
    // let profSkillIds: number[] = [];
    // for (let skill of this.selectedSkillsMap.keys()) {
    //   profSkillIds.push(skill.getId());
    // }
    // this.newCharacter.setProfSkillIds(profSkillIds);
    this.newCharacter.raceId = (this.selectedRace.getRaceId());
    if (this.selectedRace.getHasSubRaces()) {
      this.newCharacter.subRaceId = (this.selectedSubRace.getSubRaceId());
    }
    this.newCharacter.classId = (this.selectedClass.getClassId());
    this.newCharacter.alignmentId = (this.selectedAlignment.getAlignmentId());
    this.newCharacter.backgroundId = (this.selectedBackground.getBackgroundId());
    this.newCharacter.bonds = (this.selectedBond.bond);
    this.newCharacter.flaws = (this.selectedFlaw.flaw);
    this.newCharacter.ideals = (this.selectedIdeal.ideal);
    this.newCharacter.personalityTraits = (this.selectedPersonalityTrait.personalityTrait);
    this.newCharacter.strength = (this.attributeValueMap.get(CharacterConstants.attributes.STRENGTH));
    this.newCharacter.dexterity = (this.attributeValueMap.get(CharacterConstants.attributes.DEXTERITY));
    this.newCharacter.constitution = (this.attributeValueMap.get(CharacterConstants.attributes.CONSTITUTION));
    this.newCharacter.intelligence = (this.attributeValueMap.get(CharacterConstants.attributes.INTELLIGENCE));
    this.newCharacter.wisdom = (this.attributeValueMap.get(CharacterConstants.attributes.WISDOM));
    this.newCharacter.charisma = (this.attributeValueMap.get(CharacterConstants.attributes.CHARISMA));
    let profSkillIds: number[] = [];
    for (let skill of this.selectedSkillsMap.keys()) {
      profSkillIds.push(skill.getId());
    }
    this.newCharacter.profSkillIds = (profSkillIds);
    this.eventHub.broadcastNewEvent(EventHub.FINISH_NEW_CHARACTER, this.newCharacter);
  }
}
