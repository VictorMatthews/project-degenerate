import { Component, OnInit } from '@angular/core';
import {CharactersStateService} from "../characters/characters.state.service";
import {DomSanitizer} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";
import {Character} from "../characters/characters.interfaces";
import {GenerateWeaponsService} from "../generate-weapons/generate-weapons.service";
import {WeaponsStateService} from "../generate-weapons/weapons.state.service";
import {GeneratedWeapon} from "../generate-weapons/weapon/weapon.interfaces";
import {Ui} from "../shared/services/ui.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private ui: Ui, private sanitizer: DomSanitizer, private charactersState: CharactersStateService, private weaponsState: WeaponsStateService) { }

  ngOnInit() {
  }

  export() {
    let jsonCharacters = JSON.stringify(this.charactersState.createdCharacters);
    let jsonWeapons = JSON.stringify(this.weaponsState.weapons);
    let json = '{"characters":' + jsonCharacters + ',"weapons":' + jsonWeapons + '}';
    let element = document.createElement('a');
    element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(json));
    element.setAttribute('download', "project-degenerate-data.json");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  handleFileInput(files: FileList) {
    let dataFile = files.item(0);
    const fileReader = new FileReader();
    fileReader.readAsText(dataFile, "UTF-8");
    fileReader.onload = () => {
      if (typeof fileReader.result === "string") {
        let parsedJson = JSON.parse(fileReader.result);
        if (!this.ui.isNullOrUndefinedOrBlank(parsedJson)) {
          if (!this.ui.isNullOrUndefinedOrBlank(parsedJson.weapons)) {
            this.weaponsState.weapons = parsedJson.weapons as GeneratedWeapon[];
          }
          if (!this.ui.isNullOrUndefinedOrBlank(parsedJson.characters)) {
            this.charactersState.createdCharacters = parsedJson.characters as Character[];
          }
        }
      }
    };
    fileReader.onerror = (error) => {
      console.log(error);
    };
  }

}
