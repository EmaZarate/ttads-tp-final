import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { AdministracionService }       from './administracion.service';

import {AdministracionComponent}       from './administracion/administracion.component';
import { SalonesComponent}             from './salones/salones.component';
import {SalonComponent}                from './salon/salon.component'

import { AdministracionRoutingModule } from './administracion-routing.module';
import { MenusComponent } from './menus/menus.component';
import { MenuComponent } from './menu/menu.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ReservaComponent } from './reserva/reserva.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdministracionRoutingModule,
  ],
  declarations: [
    AdministracionComponent,
    SalonesComponent,
    SalonComponent,
    MenusComponent,
    MenuComponent,
    UsuariosComponent,
    UsuarioComponent,
    ReservasComponent,
    ReservaComponent
    
  ],
  providers: [
    AdministracionService
  ]
})
export class AreaAdministracionModule {}
