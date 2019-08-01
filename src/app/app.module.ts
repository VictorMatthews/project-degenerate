import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WeaponComponent } from './cards/weapon/weapon.component';
import { MatButtonModule, MatIconModule } from "@angular/material";
import { MyWeaponsComponent } from './screens/my-weapons/my-weapons.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    WeaponComponent,
    MyWeaponsComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
