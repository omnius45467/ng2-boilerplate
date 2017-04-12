// import {NgModule,Component } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
// import { FormComponent } from './form.component';
//
// @Component({
//   selector: 'omnius-app',
//   templateUrl:'./app.component.html',
// })
//
// export class AppComponent  {
//     name = 'Omnius';
//     nextDay = new Date();
// }

import { NgModule, Component } from '@angular/core';

@Component({
  selector: 'omnius-app',
  template: `
  <div class="container body-container">
    <nav class="navbar">
        <a class="btn btn-primary" routerLink="/" routerLinkActive="active">Home</a>
        <a class="btn btn-primary" routerLink="/login" routerLinkActive="active">Login</a>
    </nav>
    <router-outlet class="col-md-12"></router-outlet>
  </div>
  `
})
export class AppComponent {}
