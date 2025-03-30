import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { TiformComponent } from './pages/formTi/tiform/tiform.component';
import { ItsComponent } from './pages/its/its.component';
import { ContatosComponent } from './pages/contatos/contatos.component';

export const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"form", component:TiformComponent},
  {path:"its", component:ItsComponent},
  {path:"contatos", component:ContatosComponent}
];
