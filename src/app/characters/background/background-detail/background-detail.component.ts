import {Component, Input, OnInit} from '@angular/core';
import {Background} from "../../characters.interfaces";
import {CreateCharacterStateService} from "../../create-character/create-character.state.service";
import {Ui} from "../../../shared/services/ui.service";

@Component({
  selector: 'app-background-detail',
  templateUrl: './background-detail.component.html',
  styleUrls: ['./background-detail.component.scss']
})
export class BackgroundDetailComponent implements OnInit {

  @Input() background: Background;

  constructor(public ui: Ui, public state: CreateCharacterStateService) { }

  ngOnInit() {
  }

}
