import { Injectable } from '@angular/core';
import {GeneratedWeapon} from "./weapon/weapon.interfaces";

@Injectable({
  providedIn: 'root'
})
export class WeaponsStateService {
  weapons: GeneratedWeapon[] = [];
}
