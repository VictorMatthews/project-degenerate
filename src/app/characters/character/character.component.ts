import { Component, Input, OnInit } from '@angular/core';
import { Character } from "../characters.interfaces";
import { Ui } from "../../shared/services/ui.service";
import {CharactersStateService} from "../characters.state.service";
import {SkillsService} from "../../shared/services/skills.service";
import {Skill} from "../../shared/constants/character/skills";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input() character: Character;
  skills: Skill[] = this.ui.skills.getSkills();
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
    if (this.state.attributeIncMap.has(this.ui.attributes.STRENGTH.getId())) {
      inc = this.state.attributeIncMap.get(this.ui.attributes.STRENGTH.getId());
    }
    return this.character.strength + inc;
  }

  getDexterity() {
    let inc = 0;
    if (this.state.attributeIncMap.has(this.ui.attributes.DEXTERITY.getId())) {
      inc = this.state.attributeIncMap.get(this.ui.attributes.DEXTERITY.getId());
    }
    return this.character.dexterity + inc;

  }

  getConstitution() {
    let inc = 0;
    if (this.state.attributeIncMap.has(this.ui.attributes.CONSTITUTION.getId())) {
      inc = this.state.attributeIncMap.get(this.ui.attributes.CONSTITUTION.getId());
    }
    return this.character.constitution + inc;

  }

  getIntelligence() {
    let inc = 0;
    if (this.state.attributeIncMap.has(this.ui.attributes.INTELLIGENCE.getId())) {
      inc = this.state.attributeIncMap.get(this.ui.attributes.INTELLIGENCE.getId());
    }
    return this.character.intelligence + inc;

  }

  getWisdom() {
    let inc = 0;
    if (this.state.attributeIncMap.has(this.ui.attributes.WISDOM.getId())) {
      inc = this.state.attributeIncMap.get(this.ui.attributes.WISDOM.getId());
    }
    return this.character.wisdom + inc;

  }

  getCharisma() {
    let inc = 0;
    if (this.state.attributeIncMap.has(this.ui.attributes.CHARISMA.getId())) {
      inc = this.state.attributeIncMap.get(this.ui.attributes.CHARISMA.getId());
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
    if (skill.getAttributeMod().equals(this.ui.attributes.STRENGTH)) {
      return this.getStrength();
    }
    if (skill.getAttributeMod().equals(this.ui.attributes.DEXTERITY)) {
      return this.getDexterity();
    }
    if (skill.getAttributeMod().equals(this.ui.attributes.CONSTITUTION)) {
      return this.getConstitution();
    }
    if (skill.getAttributeMod().equals(this.ui.attributes.INTELLIGENCE)) {
      return this.getIntelligence();
    }
    if (skill.getAttributeMod().equals(this.ui.attributes.WISDOM)) {
      return this.getWisdom();
    }
    if (skill.getAttributeMod().equals(this.ui.attributes.CHARISMA)) {
      return this.getCharisma();
    }
  }
}
