import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministracionComponent } from './administracion/administracion.component';
import {SalonesComponent}          from './salones/salones.component';
import {SalonComponent}          from './salon/salon.component'


const AreaAdministracionRoutes: Routes = [
  {
        path: '',
        component: AdministracionComponent,
        children: [
          {
            path: 'salones',
            component: SalonesComponent
          },
          {
            path: 'salon/:id',
            component: SalonComponent
          },
          {
            path: 'salon',
            component: SalonComponent
          }
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
