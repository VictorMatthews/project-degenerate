import { Component, Input, OnInit } from '@angular/core';
import { Character, CharacterConstants, Skill } from "../characters.interfaces";
import { Ui } from "../../shared/services/ui.service";
import {CharactersStateService} from "../characters.state.service";
import {SkillsService} from "../../shared/services/skills.service";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input() character: Character;
  skills: Skill[] = CharacterConstants.skills.getSkills();
  readonly PROF_BONUS = 2;

  constructor(public ui: Ui, public state: CharactersStateService, public skillsService: SkillsService) { }

  ngOnInit() {
  }

  getRace() {
    return this.state.getRace();
  }

  getClass() {
    return this.state.characterClass.className;
  }

  getStrength() {
    let inc = 0;
    if (this.state.attributeIncMap.has(CharacterConstants.attributes.STRENGTH)) {
      inc = this.state.attributeIncMap.get(CharacterConstants.attributes.STRENGTH);
    }
    return this.character.strength + inc;
  }

  getDexterity() {
    let inc = 0;
    if (this.state.attributeIncMap.has(CharacterConstants.attributes.DEXTERITY)) {
      inc = this.state.attributeIncMap.get(CharacterConstants.attributes.DEXTERITY);
    }
    return this.character.dexterity + inc;

  }

  getConstitution() {
    let inc = 0;
    if (this.state.attributeIncMap.has(CharacterConstants.attributes.CONSTITUTION)) {
      inc = this.state.attributeIncMap.get(CharacterConstants.attributes.CONSTITUTION);
    }
    return this.character.constitution + inc;

  }

  getIntelligence() {
    let inc = 0;
    if (this.state.attributeIncMap.has(CharacterConstants.attributes.INTELLIGENCE)) {
      inc = this.state.attributeIncMap.get(CharacterConstants.attributes.INTELLIGENCE);
    }
    return this.character.intelligence + inc;

  }

  getWisdom() {
    let inc = 0;
    if (this.state.attributeIncMap.has(CharacterConstants.attributes.WISDOM)) {
      inc = this.state.attributeIncMap.get(CharacterConstants.attributes.WISDOM);
    }
    return this.character.wisdom + inc;

  }

  getCharisma() {
    let inc = 0;
    if (this.state.attributeIncMap.has(CharacterConstants.attributes.CHARISMA)) {
      inc = this.state.attributeIncMap.get(CharacterConstants.attributes.CHARISMA);
    }
    return this.character.charisma + inc;

  }

  getBackground() {
    return this.state.background.getBackgroundName();
  }

  getPersonalityTrait() {
    return this.character.personalityTraits;
  }

  getIdeals() {
    return this.character.ideals;
  }

  getBonds() {
    return this.character.bonds;
  }

  getFlaws() {
    return this.character.flaws;
  }

  getSkillModifierForCharacter(skill: Skill) {
    let skillVal = this.getSkillValue(skill);
    let modifier = this.getAttributeIncrease(skillVal);
    if (this.isProficientSKill(skill)) {
      modifier = modifier + this.PROF_BONUS
    }
    return modifier;
  }

  public isProficientSKill(skill: Skill): boolean {
    for (let profSkill of this.state.selectedCharacter.profSkillIds) {
      if (skill.getId() === profSkill) {
        return true;
      }
    }
    return false;
  }

  private getAttributeIncrease(attributeValue: number): number {
    return this.skillsService.getAttributeIncease(attributeValue);
  }

  private getSkillValue(skill: Skill): number {
    if (skill.getAttributeMod().equals(CharacterConstants.attributes.STRENGTH)) {
      return this.getStrength();
    }
    if (skill.getAttributeMod().equals(CharacterConstants.attributes.DEXTERITY)) {
      return this.getDexterity();
    }
    if (skill.getAttributeMod().equals(CharacterConstants.attributes.CONSTITUTION)) {
      return this.getConstitution();
    }
    if (skill.getAttributeMod().equals(CharacterConstants.attributes.INTELLIGENCE)) {
      return this.getIntelligence();
    }
    if (skill.getAttributeMod().equals(CharacterConstants.attributes.WISDOM)) {
      return this.getWisdom();
    }
    if (skill.getAttributeMod().equals(CharacterConstants.attributes.CHARISMA)) {
      return this.getCharisma();
    }
  }
}
