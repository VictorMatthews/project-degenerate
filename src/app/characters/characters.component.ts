import { Component, OnInit } from '@angular/core';
import {Character, CharacterAttribute} from "./characters.interfaces";
import {CharactersStateService} from "./characters.state.service";
import {Ui} from "../shared/services/ui.service";
import {EventHub, EventHubEvent} from "../shared/services/EventHub";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor(public ui: Ui, public state: CharactersStateService, private eventHub: EventHub) { }

  ngOnInit() {
    this.eventHub.on(EventHub.FINISH_NEW_CHARACTER, (event: EventHubEvent) => {
      if (event.name === EventHub.FINISH_NEW_CHARACTER) {
        this.state.promptForCharacterNameAndFinishCharacter(event.value);
      }
    });
    // this.state.loadCharacters();
    // this.state.selectFirstCharacter();
  }
}
