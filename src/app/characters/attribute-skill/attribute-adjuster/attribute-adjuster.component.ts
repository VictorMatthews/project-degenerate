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
  incAttValue: number = 0;

  constructor(public ui: Ui, public state: CreateCharacterStateService) { }

  ngOnInit() {
  }

  minus() {
    if (this.attValue > 8) {
      let cost = this.getAttributeValue() >= 14 ? 2 : 1;
      let points = this.state.attributePoints;
      this.attValue--;
      this.state.attributePoints = points + cost;
    }
  }

  plus() {
    let cost = this.getAttributeValue() >= 13 ? 2 : 1;
    let points = this.state.attributePoints;
    if (this.state.attributePoints >= cost && this.attValue < 15) {
      this.attValue++;
      this.state.attributePoints = points - cost;
    }
  }

  getAttributeValue() {
    return this.attValue + this.calcIncAttValue();
  }

  calcIncAttValue() {
    let characterAttributes: CharacterAttribute[] = this.state.selectedRace.getIncreaseAttribute();
    for (let i = 0; i < characterAttributes.length; i++) {
      if (characterAttributes[i].attribute.getId() === this.attribute.getId()) {
        return characterAttributes[i].increaseValue;
      }
    }
    if (!this.ui.isNullOrUndefined(this.state.selectedSubRace)) {
      characterAttributes = this.state.selectedSubRace.getIncreaseAttribute();
      for (let i = 0; i < characterAttributes.length; i++) {
        if (characterAttributes[i].attribute.getId() === this.attribute.getId()) {
          return characterAttributes[i].increaseValue;
        }
      }
    }
    return 0;
  }

  getCost() {
    if (this.getAttributeValue() >= 14) {
      return 2;
    }
    return 1;
  }
}
