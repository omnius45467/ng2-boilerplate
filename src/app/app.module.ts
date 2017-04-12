import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'angular2-moment';


import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// /* Custom Components */

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { LoggedInGuard } from './logged-in.guard';
import { UserService } from './user.service';
import { HomeComponent } from './comps/home/home.component';
import { LoginComponent } from './comps/login/login.component';

@NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      LoginComponent

    ],
    imports: [
      BrowserModule,
      ReactiveFormsModule,
      HttpModule,
      MomentModule,
      RouterModule.forRoot(routes)
    ],
    providers: [UserService, LoggedInGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
