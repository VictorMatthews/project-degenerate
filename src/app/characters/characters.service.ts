import { Injectable } from '@angular/core';
import { CharactersStateService } from "./characters.state.service";
import { Attribute, CharacterConstants, Skill } from "./characters.interfaces";
import {SkillsService} from "../shared/services/skills.service";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  readonly PROF_BONUS = 2;

  constructor(public state: CharactersStateService, public skillsService: SkillsService) { }


  getSkillModifierForCharacter(skill: Skill) {
    let skillVal = this.getSkillValue(skill);
    let modifier = this.getAttributeIncease(skillVal);
    if (this.isProficientSKill(skill)) {
      modifier = modifier + this.PROF_BONUS
    }
    return modifier;
  }

  public isProficientSKill(skill): boolean {
    for (let profSkill of this.state.selectedCharacter.profSkills) {
      if (skill.equals(profSkill)) {
        return true;
      }
    }
    return false;
  }

  private getAttributeIncease(attributeValue: number): number {
    return this.skillsService.getAttributeIncease(attributeValue);
  }

  private getSkillValue(skill: Skill) {
    if (skill.getAttributeMod().equals(CharacterConstants.attributes.STRENGTH)) {
      return this.state.selectedCharacter.strength;
    }
    if (skill.getAttributeMod().equals(CharacterConstants.attributes.DEXTERITY)) {
      return this.state.selectedCharacter.dexterity;
    }
    if (skill.getAttributeMod().equals(CharacterConstants.attributes.CONSTITUTION)) {
      return this.state.selectedCharacter.constitution;
    }
    if (skill.getAttributeMod().equals(CharacterConstants.attributes.INTELLIGENCE)) {
      return this.state.selectedCharacter.intelligence;
    }
    if (skill.getAttributeMod().equals(CharacterConstants.attributes.WISDOM)) {
      return this.state.selectedCharacter.wisdom;
    }
    if (skill.getAttributeMod().equals(CharacterConstants.attributes.CHARISMA)) {
      return this.state.selectedCharacter.charisma;
    }
  }
}
