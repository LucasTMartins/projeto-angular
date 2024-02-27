import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { EstadoCrudComponent } from './views/estado-crud/estado-crud.component';
import { CidadeCrudComponent } from './views/cidade-crud/cidade-crud.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "estados",
    component: EstadoCrudComponent
  },
  {
    path: "cidades",
    component: CidadeCrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
