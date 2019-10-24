import { Component, Input, OnInit } from '@angular/core';
import { Character, Constants, Skill } from "../characters.interfaces";
import { Ui } from "../../shared/services/ui.service";
import {CharactersService} from "../characters.service";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input() character: Character;
  skills: Skill[] = Constants.skills.getSkills();

  constructor(public ui: Ui, public service: CharactersService) { }

  ngOnInit() {
  }

  getRace() {
    return this.ui.isNullOrUndefinedOrBlank(this.character.subRace) ? this.character.race : this.character.subRace;
  }
}
