import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TypeProduitComponent} from './type-produit/type-produit.component';
import {Route} from './config/routes';
import { LoginComponent } from './login/login.component';
import { CampagneListComponent } from "./components/campagne-list/campagne-list.component";


const routes: Routes = [
  {
    path: Route.campagne + '/' + Route.list,
    component: CampagneListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
