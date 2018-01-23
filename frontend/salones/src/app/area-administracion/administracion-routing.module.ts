import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministracionComponent } from './administracion/administracion.component';
import {SalonesComponent}          from './salones/salones.component'



const crisisCenterRoutes: Routes = [
  {
        path: '',
        component: AdministracionComponent,
        children: [
          {
            path: 'salones',
            component: SalonesComponent
          }
        ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class AdministracionRoutingModule { }
