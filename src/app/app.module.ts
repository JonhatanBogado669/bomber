import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AuthModule } from './auth/auth.module';

import { SolicitanteModule } from './pages/solicitante/solicitante.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';



@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    AuthModule,
    DashboardModule,
    //
    CoreModule,
    SolicitanteModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
  
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
