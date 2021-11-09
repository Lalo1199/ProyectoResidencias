import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { EliminarComponent } from './pages/eliminar/eliminar.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { TicketsRoutingModule } from './tickets-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgregarComponent,
    EliminarComponent,
    TicketsComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class TicketsModule { }
