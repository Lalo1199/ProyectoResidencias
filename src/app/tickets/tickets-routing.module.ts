import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TicketsComponent } from './pages/tickets/tickets.component';

const rutas: Routes = [
  {
    path: '',
    component: TicketsComponent
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
export class TicketsRoutingModule { }
