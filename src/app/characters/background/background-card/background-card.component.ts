import {Component, Input, OnInit} from '@angular/core';
import {CreateCharacterStateService} from "../../create-character/create-character.state.service";
import {Background} from "../../../shared/constants/character/backgrounds";

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
