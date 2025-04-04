import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FrontComponent } from './pages/front/front.component';
import { BackComponent } from './pages/back/back.component';
import { DataComponent } from './pages/data/data.component';

export const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"front", component: FrontComponent},
    {path:"back", component: BackComponent},
    {path:"data", component: DataComponent}
];
