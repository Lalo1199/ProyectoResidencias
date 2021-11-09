import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { EliminarComponent } from './pages/eliminar/eliminar.component';
import { PrioridadesComponent } from './pages/prioridades/prioridades.component';
import { PrioridadRoutingModule } from './prioridad-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgregarComponent,
    EliminarComponent,
    PrioridadesComponent
  ],
  imports: [
    CommonModule,
    PrioridadRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class PrioridadModule { }
