import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashComponent } from './driver_dash/dash/dash.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListCovComponent } from './driver_dash/list-cov/list-cov.component';
import { CreateCovComponent } from './driver_dash/create-cov/create-cov.component';
import { UpdateCovComponent } from './driver_dash/update-cov/update-cov.component';

const routes: Routes = [
    {path:'dash',component:DashComponent},
    {path:'',component:AcceuilComponent},
    {path:'list',component:ListCovComponent},
    {path:'Add',component:CreateCovComponent},
    {path:'Update-cov/:id',component:UpdateCovComponent}

    
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
