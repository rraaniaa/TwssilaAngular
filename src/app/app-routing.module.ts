import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashComponent } from './dist/dash/dash.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListCovComponent } from './list-cov/list-cov.component';
import { CreateCovComponent } from './create-cov/create-cov.component';
import { UpdateCovComponent } from './update-cov/update-cov.component';

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
