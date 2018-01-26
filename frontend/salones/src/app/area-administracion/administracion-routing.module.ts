import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministracionComponent } from './administracion/administracion.component';
import {SalonesComponent}          from './salones/salones.component';
import {SalonComponent}          from './salon/salon.component';
import {MenusComponent}          from './menus/menus.component';
import {MenuComponent}           from './menu/menu.component';
import {ClientesComponent}       from './clientes/clientes.component';
import {ClienteComponent}        from './cliente/cliente.component'

const AreaAdministracionRoutes: Routes = [
  { path: '', component: AdministracionComponent,children: [
          { path: 'salones', component: SalonesComponent},
          { path: 'salon/:id', component: SalonComponent},
          { path: 'salon', component: SalonComponent},
          { path: 'menus', component: MenusComponent},
          { path: 'menu/:id', component: MenuComponent},
          { path: 'menu', component: MenuComponent},
          { path: 'clientes', component: ClientesComponent},
          { path: 'cliente/:id', component: ClienteComponent},
          { path: 'cliente', component: ClienteComponent},
          { path: '', redirectTo: '/administracion/menus', pathMatch: 'full' },
        ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(AreaAdministracionRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class AdministracionRoutingModule { }
