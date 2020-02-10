import { Component, OnInit } from '@angular/core';
import { GeneratedWeapon } from './weapon/weapon.interfaces';
import { GenerateWeaponsService } from "./generate-weapons.service";
import { Ui } from "../shared/services/ui.service";

@Component({
  selector: 'app-generate-weapons',
  templateUrl: './generate-weapons.component.html',
  styleUrls: ['./generate-weapons.component.scss']
})
export class GenerateWeaponsComponent implements OnInit {
  weapons: GeneratedWeapon[] = [];

  constructor(public service: GenerateWeaponsService, public ui: Ui) { }

  ngOnInit() {
  }

  generateWeapon() {
    this.weapons.push(this.service.generateWeapon());
  }
}
