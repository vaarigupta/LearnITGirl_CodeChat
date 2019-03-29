import { NgModule } from '@angular/core';
import {HeroesComponent} from './heroes/heroes.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'heroes' , component: HeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
