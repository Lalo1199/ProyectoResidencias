import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasificacionesComponent } from './pages/clasificaciones/clasificaciones.component';
import { RouterModule, Routes } from '@angular/router';


const rutas: Routes = [
  {
    path: '',
    component: ClasificacionesComponent
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
export class ClasificacionesRoutingModule { }
