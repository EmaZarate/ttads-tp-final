import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GuestService} from './guest.service';
import { ReservationClientComponent } from './reservation-client/reservation-client.component';
import { ReservationListClientComponent } from './reservation-list-client/reservation-list-client.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReservationClientComponent, ReservationListClientComponent],
  providers: [
    GuestService
  ]
})
export class GuestAdministrationModule { }
