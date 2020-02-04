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
    ClassCardComponent,
    ClassDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [
    DialogService,
  ],
  entryComponents: [
    CreateCharacterComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
