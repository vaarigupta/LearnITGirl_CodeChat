import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterComponent } from './register/register.component';
import {LoginComponent} from './login/login.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  {path:'', redirectTo: 'home' , pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  {path: 'register' , component : RegisterComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'user' , component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
