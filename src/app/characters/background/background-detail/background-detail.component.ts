import {Component, Input, OnInit} from '@angular/core';
import {CreateCharacterStateService} from "../../create-character/create-character.state.service";
import {Ui} from "../../../shared/services/ui.service";
import {Background} from "../../../shared/constants/character/backgrounds";

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
