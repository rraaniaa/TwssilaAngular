import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashComponent } from './dist/dash/dash.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListCovComponent } from './list-cov/list-cov.component';

const routes: Routes = [
    {path:'dash',component:DashComponent},
    {path:'',component:AcceuilComponent},
    {path:'list',component:ListCovComponent},

    
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
