import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { EliminarComponent } from './pages/eliminar/eliminar.component';
import { RolesComponent } from './pages/roles/roles.component';
import { RolesRoutingModule } from './roles-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgregarComponent,
    EliminarComponent,
    RolesComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class RolesModule { }
