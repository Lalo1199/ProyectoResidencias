import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrioridadesComponent } from './pages/prioridades/prioridades.component';

const rutas: Routes = [
  {
    path: '',
    component: PrioridadesComponent
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
export class PrioridadRoutingModule { }
