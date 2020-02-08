import { Component, OnInit } from '@angular/core';
import { Ui } from "../../shared/services/ui.service";
import { CreateCharacterStateService } from "./create-character.state.service";

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss']
})
export class CreateCharacterComponent implements OnInit {

  constructor(public ui: Ui, public state: CreateCharacterStateService) { }

  ngOnInit() {
    this.state.clearData();
  }

}
