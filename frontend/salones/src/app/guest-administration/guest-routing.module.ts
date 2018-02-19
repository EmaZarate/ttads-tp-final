import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ReservationListClientComponent} from './reservation-list-client/reservation-list-client.component'
import { ReservationClientComponent} from './reservation-client/reservation-client.component'

const GuestRoutes: Routes = [
  { path: '', component: ReservationListClientComponent},
  { path: ':id',component:ReservationClientComponent}
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
