import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './pages/roles/roles.component';

const rutas: Routes = [
  {
    path: '',
    component: RolesComponent
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
export class RolesRoutingModule { }
