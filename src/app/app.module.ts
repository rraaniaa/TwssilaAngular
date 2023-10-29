import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // 


import { DashComponent } from './dist/dash/dash.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListCovComponent } from './list-cov/list-cov.component';
@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    AcceuilComponent,
    ListCovComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule ,

    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
