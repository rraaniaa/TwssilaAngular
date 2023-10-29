import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceComponent } from './dist/dashbord/finance.component';
import { SalesComponent } from './dist/dashbord2/sales.component';

const routes: Routes = [
    {path:'',component:SalesComponent},
  {path: 'dash', component: FinanceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
