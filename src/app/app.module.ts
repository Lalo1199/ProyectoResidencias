import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DepartamentosModule } from './Departamentos/departamentos.module';
import { MaterialModule } from './material/material.module';

import { HttpClientModule } from '@angular/common/http';

import { ErrorPageComponent } from './shared/error-page/error-page.component';
// import { AgregarComponent } from './nombreTabla/pages/agregar/agregar.component';
// import { ClasificacionesRoutingModule } from './clasificaciones/clasificaciones-routing.module';
// import { DepartamentosRoutingModule } from './Departamentos/departamentos-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    // AgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DepartamentosModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    // ClasificacionesRoutingModule,
    // DepartamentosRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
