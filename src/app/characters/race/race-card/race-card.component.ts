import {Component, Input, OnInit} from '@angular/core';
import {Race} from "../../characters.interfaces";
import {CreateCharacterStateService} from "../../create-character/create-character.state.service";

@Component({
  selector: 'app-race-card',
  templateUrl: './race-card.component.html',
  styleUrls: ['./race-card.component.scss']
})
export class RaceCardComponent implements OnInit {

  @Input() race: Race;

  constructor(public state: CreateCharacterStateService) { }

  ngOnInit() {
  }

  isSelected() {
    return this.race === this.state.selectedRace ? 'selected-card' : '';
  }

}
