import { Component, OnInit } from '@angular/core';
import { GenerateWeaponsService } from "./generate-weapons.service";
import { Ui } from "../shared/services/ui.service";
import {WeaponsStateService} from "./weapons.state.service";

@Component({
  selector: 'app-generate-weapons',
  templateUrl: './generate-weapons.component.html',
  styleUrls: ['./generate-weapons.component.scss']
})
export class GenerateWeaponsComponent implements OnInit {

  constructor(public service: GenerateWeaponsService, public ui: Ui, public state: WeaponsStateService) { }

  ngOnInit() {
  }

  generateWeapon() {
    this.state.weapons.push(this.service.generateWeapon());
  }
}
