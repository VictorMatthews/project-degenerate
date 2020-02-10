import {Component, Input, OnInit} from '@angular/core';
import {Class} from "../../../shared/constants/character/classes";

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.scss']
})
export class ClassDetailComponent implements OnInit {

  @Input() class: Class;

  constructor() { }

  ngOnInit() {
  }

  getHitDice() {
    return "1d" + this.class.classInfo.hitDie + this.perClassLevel();
  }

  getHitPointLevelOne() {
    return this.class.classInfo.hitDie + " + your Constitution modifier";
  }

  getHitPointHigherLevel() {
    return "1d" + this.class.classInfo.hitDie + " (or " + this.halfPlusOne() + ") + your Constitution modifier" + this.perClassLevel() + " after 1st";
  }

  halfPlusOne() {
    return ((this.class.classInfo.hitDie / 2) + 1);
  }

  private perClassLevel() {
    return " per " + this.class.className.toLowerCase() + " level";
  }
}
