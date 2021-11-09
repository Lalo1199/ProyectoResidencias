import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Departamentos/pages/home/home.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
                                 

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'departamentos',
    loadChildren: () => import('./Departamentos/departamentos.module').then(m => m.DepartamentosModule)
  },
  {
    path: 'clasificaciones',
    loadChildren: () => import('./clasificaciones/clasificaciones.module').then(m => m.ClasificacionesModule)
  },
  {
    path: 'prioridades',
    loadChildren: () => import('./prioridad/prioridad.module').then(m => m.PrioridadModule)
  },
  {
    path: 'roles',
    loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule)
  },
  {
    path: 'subclasificaciones',
    loadChildren: () => import('./subclasificaciones/subclasificaciones.module').then(m => m.SubclasificacionesModule)
  },
  {
    path: 'tickets',
    loadChildren: () => import('./tickets/tickets.module').then(m => m.TicketsModule)
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: 'departamentos'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

