import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WeaponComponent } from './cards/weapon/weapon.component';
import { MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatListModule } from "@angular/material";
import { GenerateWeaponsComponent } from './screens/generate-weapons/generate-weapons.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    WeaponComponent,
    GenerateWeaponsComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
