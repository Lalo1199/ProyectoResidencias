import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { EliminarComponent } from './pages/eliminar/eliminar.component';
import { SubclasificacionesComponent } from './pages/subclasificaciones/subclasificaciones.component';
import { SubclasificacionesRoutingModule } from './subclasificaciones-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgregarComponent,
    EliminarComponent,
    SubclasificacionesComponent
  ],
  imports: [
    CommonModule,
    SubclasificacionesRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class SubclasificacionesModule { }
