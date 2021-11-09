import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { EliminarComponent } from './pages/eliminar/eliminar.component';
import { ClasificacionesComponent } from './pages/clasificaciones/clasificaciones.component';
import { ClasificacionesRoutingModule } from './clasificaciones-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgregarComponent,
    EliminarComponent,
    ClasificacionesComponent
  ],
  imports: [
    CommonModule,
    ClasificacionesRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class ClasificacionesModule { }
