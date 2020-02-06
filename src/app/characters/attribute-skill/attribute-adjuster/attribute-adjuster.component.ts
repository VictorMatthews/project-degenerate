import {Component, Input, OnInit} from '@angular/core';
import {Attribute, CharacterAttribute} from "../../characters.interfaces";
import {CreateCharacterStateService} from "../../create-character/create-character.state.service";
import {Ui} from "../../../shared/services/ui.service";

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
    if (this.state.attributeValueMap.has(this.attribute)) {
      this.attValue = this.state.attributeValueMap.get(this.attribute);
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
    if (this.state.attributeIncMap.has(this.attribute)) {
      return this.state.attributeIncMap.get(this.attribute);
    }
    let characterAttributes: CharacterAttribute[] = this.state.selectedRace.getIncreaseAttribute();
    for (let i = 0; i < characterAttributes.length; i++) {
      if (characterAttributes[i].attribute.getId() === this.attribute.getId()) {
        this.state.attributeIncMap.set(this.attribute, characterAttributes[i].increaseValue);
        return characterAttributes[i].increaseValue;
      }
    }
    if (!this.ui.isNullOrUndefined(this.state.selectedSubRace)) {
      characterAttributes = this.state.selectedSubRace.getIncreaseAttribute();
      for (let i = 0; i < characterAttributes.length; i++) {
        if (characterAttributes[i].attribute.getId() === this.attribute.getId()) {
          this.state.attributeIncMap.set(this.attribute, characterAttributes[i].increaseValue);
          return characterAttributes[i].increaseValue;
        }
      }
    }
    this.state.attributeIncMap.set(this.attribute, 0);
    return 0;
  }

  getCost(isPlus: boolean) {
    if ((isPlus && this.getAttributeValue() >= 13)
      || (!isPlus && this.getAttributeValue() >= 14)) {
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
    this.state.attributeValueMap.set(this.attribute, this.attValue);
  }
}
