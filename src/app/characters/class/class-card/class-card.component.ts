import {Component, Input, OnInit} from '@angular/core';
import {CreateCharacterStateService} from "../../create-character/create-character.state.service";
import {Class} from "../../../shared/constants/character/classes";

@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.scss']
})
export class ClassCardComponent implements OnInit {

  @Input() class: Class;

  constructor(public state: CreateCharacterStateService) { }

  ngOnInit() {
  }

  isSelected() {
    return this.class === this.state.selectedClass ? 'selected-card' : '';
  }
}
