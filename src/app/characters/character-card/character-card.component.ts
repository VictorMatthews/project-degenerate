import {Component, Input, OnInit} from '@angular/core';
import {CharactersStateService} from "../characters.state.service";
import {Character} from "../characters.interfaces";

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  @Input() character: Character;

  constructor(public state: CharactersStateService) { }

  ngOnInit() {
  }

  isSelected() {
    return this.character === this.state.selectedCharacter ? 'selected-card' : '';
  }
}
