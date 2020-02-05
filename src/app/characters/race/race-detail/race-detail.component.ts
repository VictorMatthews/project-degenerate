import {Component, Input, OnInit} from '@angular/core';
import {CharacterAttribute, CharacterConstants, Race} from "../../characters.interfaces";
import {Ui} from "../../../shared/services/ui.service";

@Component({
  selector: 'app-race-detail',
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.scss']
})
export class RaceDetailComponent implements OnInit {

  @Input() race: Race;

  constructor(public ui: Ui) { }

  ngOnInit() {
  }

  getAbilityScoreIncrease() {
    let attributes: CharacterAttribute[] = this.race.getIncreaseAttribute();
    let scoreInc = "";
    if (attributes.length === CharacterConstants.attributes.getAttributes().length) {
      return "Your Ability Scores each increase by 1.";
    }
    for (let i = 0; i < attributes.length; i++) {
      if (i === 0) {
        scoreInc = "Your ";
      } else {
        scoreInc = scoreInc + ", and your ";
      }
      scoreInc = scoreInc + attributes[i].attribute.name + " score increases by " + attributes[i].increaseValue;
    }
    return scoreInc + ".";
  }

  getSpeed() {
    let speed = "Your base walking speed is " + this.race.speed + " feet."
    if (!this.ui.isNullOrUndefined(this.race.getRaceInfo().speed)) {
      speed = speed + " " + this.race.getRaceInfo().speed;
    }
    return speed;
  }
}
