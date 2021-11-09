import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SubclasificacionesComponent } from './pages/subclasificaciones/subclasificaciones.component';

const rutas: Routes = [
  {
    path: '',
    component: SubclasificacionesComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(rutas),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class SubclasificacionesRoutingModule { }
