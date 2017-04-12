import { HomeComponent } from './comps/home/home.component';
import { LoginComponent } from './comps/login/login.component';

export const routes =[
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
];
