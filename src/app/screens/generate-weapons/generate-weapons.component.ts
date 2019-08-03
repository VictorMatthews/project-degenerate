import { Component, OnInit } from '@angular/core';
import { GeneratedWeapon } from '../../cards/weapon/weapon.interfaces';
import { GenerateWeaponsService } from "./generate-weapons.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'generate-weapons',
  templateUrl: './generate-weapons.component.html',
  styleUrls: ['./generate-weapons.component.css']
})
export class GenerateWeaponsComponent implements OnInit {
  weapons: GeneratedWeapon[] = [];

  constructor(public service: GenerateWeaponsService, public sanitization: DomSanitizer) { }

  ngOnInit() {
  }

  generateWeapon() {
    this.weapons.push(this.service.generateWeapon());
  }
}
