import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ReservationListClientComponent} from './reservation-list-client/reservation-list-client.component'

const GuestRoutes: Routes = [
  { path: '', component: ReservationListClientComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(GuestRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class GuestRoutingModule { }
