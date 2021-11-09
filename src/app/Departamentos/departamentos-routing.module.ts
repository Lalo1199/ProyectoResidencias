import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DepartamentosComponent } from './pages/departamentos/departamentos.component';

const rutas: Routes = [
  {
    path: '',
    component: DepartamentosComponent
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
export class DepartamentosRoutingModule { }
