import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministracionComponent } from './administracion/administracion.component';
import {SalonesComponent}          from './salones/salones.component';
import {SalonComponent}          from './salon/salon.component';
import {MenusComponent}          from './menus/menus.component';
import {MenuComponent}           from './menu/menu.component';
import {UsuariosComponent}       from './usuarios/usuarios.component';
import {UsuarioComponent}        from './usuario/usuario.component'
import {ReservasComponent}       from './reservas/reservas.component'; 

const AreaAdministracionRoutes: Routes = [
  { path: '', component: AdministracionComponent,children: [
          { path: 'salones', component: SalonesComponent},
          { path: 'salon/:id', component: SalonComponent},
          { path: 'salon', component: SalonComponent},
          { path: 'menus', component: MenusComponent},
          { path: 'menu/:id', component: MenuComponent},
          { path: 'menu', component: MenuComponent},
          { path: 'usuarios', component: UsuariosComponent},
          { path: 'usuario/:id', component: UsuarioComponent},
          { path: 'usuario', component: UsuarioComponent},
          { path: 'reservas', component: ReservasComponent},
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
