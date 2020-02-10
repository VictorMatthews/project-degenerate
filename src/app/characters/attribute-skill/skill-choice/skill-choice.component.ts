import {Component, Input, OnInit} from '@angular/core';
import {CreateCharacterStateService} from "../../create-character/create-character.state.service";
import {Ui} from "../../../shared/services/ui.service";
import {MAT_CHECKBOX_CLICK_ACTION} from "@angular/material/checkbox";
import {SkillsService} from "../../../shared/services/skills.service";
import {Skill} from "../../../shared/constants/character/skills";

@Component({
  selector: 'app-skill-choice',
  templateUrl: './skill-choice.component.html',
  styleUrls: ['./skill-choice.component.scss'],
  providers: [
    // Used to implement our own control of the checkbox
    {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'noop'}
  ]
})
export class SkillChoiceComponent implements OnInit {

  @Input() skill: Skill;
  isChecked: boolean = false;
  checkedByDefault: boolean = false;

  constructor(public ui: Ui, public state: CreateCharacterStateService, public skillsService: SkillsService) { }

  ngOnInit() {
    for (let s of this.state.selectedBackground.getProfSkills()) {
      if (s.getId() === this.skill.getId()) {
        this.isChecked = true;
        this.checkedByDefault = true;
        this.state.selectedSkillsMap.set(s.getId(), true);
      }
    }
  }

  disabled(): boolean {
    if (this.checkedByDefault) {
      return true;
    }
    if (this.state.selectedClass.classInfo.hasSkillChoice(this.skill)) {
      if (!this.isChecked && this.state.skillPoints === 0) {
        return true;
      }
      return false;
    }
    return true;
  }

  selectedSkill(): void {
    if (!this.disabled()) {
      if (this.isChecked) {
        this.state.skillPoints++;
        this.state.selectedSkillsMap.delete(this.skill.getId());
      } else {
        this.state.skillPoints--;
        this.state.selectedSkillsMap.set(this.skill.getId(), true);
      }
      this.isChecked = !this.isChecked;
    }
  }

  getSkillMod(): number {
    let attValue = this.state.attributeValueMap.get(this.skill.attributeMod.getId());
    let incValue = this.state.attributeIncMap.get(this.skill.attributeMod.getId());
    let skillMod = this.skillsService.getAttributeIncease(attValue + incValue);
    return this.isChecked ? skillMod + 2 : skillMod;
  }

  checked(): boolean {
    let selected = this.state.selectedSkillsMap.get(this.skill.getId());
    if (!this.ui.isNullOrUndefined(selected)) {
      this.isChecked = selected;
    }
    return this.isChecked;
  }
}
