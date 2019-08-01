import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WeaponComponent } from './weapon/weapon.component';
import {MatIconModule} from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    WeaponComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
