import { Component, OnInit } from '@angular/core';
import {CreateCharacterStateService} from "../create-character/create-character.state.service";
import {Ui} from "../../shared/services/ui.service";

@Component({
  selector: 'app-attribute-skill',
  templateUrl: './attribute-skill.component.html',
  styleUrls: ['./attribute-skill.component.scss']
})
export class AttributeSkillComponent implements OnInit {

  constructor(public ui: Ui, public state: CreateCharacterStateService) { }

  ngOnInit() {
  }

}
