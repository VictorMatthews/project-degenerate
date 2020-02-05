import { Component, OnInit } from '@angular/core';
import {Character, CharacterAttribute} from "./characters.interfaces";
import {CharactersStateService} from "./characters.state.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor(public state: CharactersStateService) { }

  ngOnInit() {
    this.state.loadCharacters();
    this.state.selectFirstCharacter();
  }
}
