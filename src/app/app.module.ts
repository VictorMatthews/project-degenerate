import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WeaponComponent } from './generate-weapons/weapon/weapon.component';
import { GenerateWeaponsComponent } from './generate-weapons/generate-weapons.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from "./shared/modules/material.module";
import { MenuComponent } from "./menu/menu.component";
import { HomeComponent } from "./home/home.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './characters/character/character.component';
import { CreateCharacterComponent } from './characters/create-character/create-character.component';
import { DialogService } from "./shared/services/dialog-service";
import { RaceDetailComponent } from './characters/race/race-detail/race-detail.component';
import { RaceCardComponent } from './characters/race/race-card/race-card.component';
import { ClassCardComponent } from './characters/class/class-card/class-card.component';
import { ClassDetailComponent } from './characters/class/class-detail/class-detail.component';
import { SubRaceCardComponent } from "./characters/subRace/sub-race-card/sub-race-card.component";
import { BackgroundCardComponent } from './characters/background/background-card/background-card.component';
import { BackgroundDetailComponent } from './characters/background/background-detail/background-detail.component';
import { AttributeSkillComponent } from './characters/attribute-skill/attribute-skill.component';
import { AttributeAdjusterComponent } from './characters/attribute-skill/attribute-adjuster/attribute-adjuster.component';
import {FormsModule} from "@angular/forms";
import { SkillChoiceComponent } from './characters/attribute-skill/skill-choice/skill-choice.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { CharacterCardComponent } from './characters/character-card/character-card.component';
import { CharacterNameDialogComponent } from './characters/create-character/character-name-dialog/character-name-dialog.component';
import {EventHub, EventHubEvent} from "./shared/services/EventHub";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    GenerateWeaponsComponent,
    WeaponComponent,
    CharactersComponent,
    CharacterComponent,
    CreateCharacterComponent,
    RaceDetailComponent,
    RaceCardComponent,
    SubRaceCardComponent,
    ClassCardComponent,
    ClassDetailComponent,
    BackgroundCardComponent,
    BackgroundDetailComponent,
    AttributeSkillComponent,
    AttributeAdjusterComponent,
    SkillChoiceComponent,
    CharacterCardComponent,
    CharacterNameDialogComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MaterialModule,
        HttpClientModule,
        FormsModule,
    ],
  providers: [
    DialogService,
    EventHub,
  ],
  entryComponents: [
    CreateCharacterComponent,
    CharacterNameDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
