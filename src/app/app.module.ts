import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WeaponComponent } from './cards/weapon/weapon.component';
import {MatButtonModule, MatIconModule} from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    WeaponComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
