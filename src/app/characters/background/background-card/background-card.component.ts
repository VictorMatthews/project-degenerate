import {Component, Input, OnInit} from '@angular/core';
import {Background} from "../../characters.interfaces";
import {CreateCharacterStateService} from "../../create-character/create-character.state.service";

@Component({
  selector: 'app-background-card',
  templateUrl: './background-card.component.html',
  styleUrls: ['./background-card.component.scss']
})
export class BackgroundCardComponent implements OnInit {

  @Input() background: Background;

  constructor(public state: CreateCharacterStateService) { }

  ngOnInit() {
  }

  isSelected() {
    return this.background === this.state.selectedBackground ? 'selected-card' : '';
  }
}
