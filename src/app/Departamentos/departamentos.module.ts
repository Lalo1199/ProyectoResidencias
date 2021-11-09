import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentosComponent } from './pages/departamentos/departamentos.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { EliminarComponent } from './pages/eliminar/eliminar.component';
import { DepartamentosRoutingModule } from './departamentos-routing.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    DepartamentosComponent,
    HomeComponent,
    AgregarComponent,
    EliminarComponent,
    
  ],
  imports: [
    CommonModule,
    DepartamentosRoutingModule,
    FormsModule,
    MaterialModule 
  ]
})
export class DepartamentosModule { }
