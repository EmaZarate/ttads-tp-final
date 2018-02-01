import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministracionComponent } from './administracion-nav/administracion.component';
import {SalonesComponent}          from './salones/salones.component';
import {SalonComponent}          from './salon/salon.component';
import {MenusComponent}          from './menus/menus.component';
import {MenuComponent}           from './menu/menu.component';
import {UsuariosComponent}       from './usuarios/usuarios.component';
import {UsuarioComponent}        from './usuario/usuario.component';
import {ReservasVistasComponent} from './reservas-vistas/reservas-vistas.component'; 
import {ReservasCalendarioComponent} from './reservas-calendario/reservas-calendario.component'        
import {ReservasComponent}       from './reservas/reservas.component'; 
import {ReservaComponent } from './reserva/reserva.component';

const AreaAdministracionRoutes: Routes = [
  { path: '', component: AdministracionComponent, children: [
          { path: 'salones', component: SalonesComponent},
          { path: 'salon/:id', component: SalonComponent},
          { path: 'salon', component: SalonComponent},
          { path: 'menus', component: MenusComponent},
          { path: 'menu/:id', component: MenuComponent},
          { path: 'menu', component: MenuComponent},
          { path: 'usuarios', component: UsuariosComponent},
          { path: 'usuario/:id', component: UsuarioComponent},
          { path: 'reservas', component: ReservasVistasComponent, children:[
            { path:'lista', component:ReservasComponent},
            { path:'calendario', component:ReservasCalendarioComponent},
            { path:'', redirectTo:'/administracion/reservas/lista', pathMatch: 'full'}
          ]},
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
