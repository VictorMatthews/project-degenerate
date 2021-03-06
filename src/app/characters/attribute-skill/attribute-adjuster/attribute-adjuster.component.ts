import {Component, Input, OnInit} from '@angular/core';
import {CreateCharacterStateService} from "../../create-character/create-character.state.service";
import {Ui} from "../../../shared/services/ui.service";
import {Attribute} from "../../../shared/constants/character/attributes";
import {CharacterAttribute} from "../../../shared/constants/character/races";

@Component({
  selector: 'app-attribute-adjuster',
  templateUrl: './attribute-adjuster.component.html',
  styleUrls: ['./attribute-adjuster.component.scss']
})
export class AttributeAdjusterComponent implements OnInit {

  @Input() attribute: Attribute;
  attValue: number = 8;

  constructor(public ui: Ui, public state: CreateCharacterStateService) { }

  ngOnInit() {
    if (this.state.attributeValueMap.has(this.attribute.getId())) {
      this.attValue = this.state.attributeValueMap.get(this.attribute.getId());
    } else {
      this.setStateAttributeValue();
    }
  }

  minus() {
    if (this.attValue > 8) {
      let cost = this.getCost(false);
      let points = this.state.attributePoints;
      this.attValue--;
      this.state.attributePoints = points + cost;
    }
    this.setStateAttributeValue();
  }

  plus() {
    let cost = this.getCost(true);
    let points = this.state.attributePoints;
    if (this.state.attributePoints >= cost && this.attValue < 15) {
      this.attValue++;
      this.state.attributePoints = points - cost;
    }
    this.setStateAttributeValue();
  }

  getAttributeValue() {
    return this.attValue + this.calcIncAttValue();
  }

  calcIncAttValue() {
    if (this.state.attributeIncMap.has(this.attribute.getId())) {
      return this.state.attributeIncMap.get(this.attribute.getId());
    }
    let characterAttributes: CharacterAttribute[] = this.state.selectedRace.getIncreaseAttribute();
    for (let i = 0; i < characterAttributes.length; i++) {
      if (characterAttributes[i].attribute.getId() === this.attribute.getId()) {
        this.state.attributeIncMap.set(this.attribute.getId(), characterAttributes[i].increaseValue);
        return characterAttributes[i].increaseValue;
      }
    }
    if (!this.ui.isNullOrUndefined(this.state.selectedSubRace)) {
      characterAttributes = this.state.selectedSubRace.getIncreaseAttribute();
      for (let i = 0; i < characterAttributes.length; i++) {
        if (characterAttributes[i].attribute.getId() === this.attribute.getId()) {
          this.state.attributeIncMap.set(this.attribute.getId(), characterAttributes[i].increaseValue);
          return characterAttributes[i].increaseValue;
        }
      }
    }
    this.state.attributeIncMap.set(this.attribute.getId(), 0);
    return 0;
  }

  getCost(isPlus: boolean) {
    if ((isPlus && this.attValue >= 13)
      || (!isPlus && this.attValue >= 14)) {
      return 2;
    }
    return 1;
  }

  disabled(isPlus: boolean) {
    if (isPlus) {
      if (this.state.attributePoints - this.getCost(isPlus) < 0 || this.attValue === 15) {
        return 'disabled-button';
      }
    } else {
      if (this.attValue === 8) {
        return 'disabled-button';
      }
    }
    return '';
  }

  private setStateAttributeValue(): void {
    this.state.attributeValueMap.set(this.attribute.getId(), this.attValue);
  }
}
