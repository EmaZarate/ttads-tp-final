import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import {GuestService} from './guest.service';
import { ReservationClientComponent } from './reservation-client/reservation-client.component';
import { ReservationListClientComponent } from './reservation-list-client/reservation-list-client.component'
import {GuestRoutingModule} from './guest-routing.module'

@NgModule({
  imports: [
    CommonModule,
    GuestRoutingModule,
    FormsModule
  ],
  declarations: [
    ReservationClientComponent,
    ReservationListClientComponent
  ],
  providers: [
    GuestService
  ]
})
export class GuestAdministrationModule { }
