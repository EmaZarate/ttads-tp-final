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
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteComponent } from './cliente/cliente.component';

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
    ClientesComponent,
    ClienteComponent
  ],
  providers: [
    AdministracionService
  ]
})
export class AreaAdministracionModule {}
