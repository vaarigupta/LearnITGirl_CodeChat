import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { CreatesessionComponent } from './createsession/createsession.component';
import { JoinsessionComponent } from './joinsession/joinsession.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SessionComponent } from './session/session.component';
import { CodeComponent } from './code/code.component';
import { ChatComponent } from './chat/chat.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    CreatesessionComponent,
    JoinsessionComponent,
    SessionComponent,
    CodeComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
