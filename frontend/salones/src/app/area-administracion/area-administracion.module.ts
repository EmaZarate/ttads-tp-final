import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { AdministracionService }       from './administracion.service';

import {AdministracionComponent}       from './administracion-nav/administracion.component';
import { SalonesComponent}             from './salones/salones.component';
import {SalonComponent}                from './salon/salon.component'

import { AdministracionRoutingModule } from './administracion-routing.module';
import { MenusComponent } from './menus/menus.component';
import { MenuComponent } from './menu/menu.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ReservasComponent } from './reservas-lista/reservas.component'
import { ReservaComponent } from './reserva/reserva.component';
import { ReservasVistasComponent } from './reservas-vistas/reservas-vistas.component';
import { ReservasCalendarioComponent } from './reservas-calendario/reservas-calendario.component';



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
    ReservaComponent,
    ReservasVistasComponent,
    ReservasCalendarioComponent,
  ],
  providers: [
    AdministracionService
  ]
})
export class AreaAdministracionModule {}
