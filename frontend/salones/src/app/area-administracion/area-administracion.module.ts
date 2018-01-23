import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { AdministracionService }        from './administracion.service';

import {AdministracionComponent}       from './administracion/administracion.component';
import { SalonesComponent}             from './salones/salones.component'

import { AdministracionRoutingModule } from './administracion-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdministracionRoutingModule,
  ],
  declarations: [
    AdministracionComponent,
    SalonesComponent
  ],
  providers: [
    AdministracionService
  ]
})
export class AreaAdministracionModule {}
