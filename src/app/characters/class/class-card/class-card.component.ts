import {Component, Input, OnInit} from '@angular/core';
import {Class, Race} from "../../characters.interfaces";
import {CreateCharacterStateService} from "../../create-character/create-character.state.service";

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
