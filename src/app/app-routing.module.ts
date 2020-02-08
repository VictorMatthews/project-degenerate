import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GenerateWeaponsComponent } from "./generate-weapons/generate-weapons.component";
import { CharactersComponent } from "./characters/characters.component";

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: 'weapons', component: GenerateWeaponsComponent },
  { path: 'characters', component: CharactersComponent },
  { path: '**', redirectTo: 'characters' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
