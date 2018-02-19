import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GuestService} from '../guest.service'

@Component({
  selector: 'app-reservation-client',
  templateUrl: './reservation-client.component.html',
  styleUrls: ['./reservation-client.component.css']
})
export class ReservationClientComponent implements OnInit {
  id:string
  reservation:any
  constructor(private activatedRoute:ActivatedRoute, private service:GuestService) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.getReservation(this.id).subscribe( reservation=> {this.reservation=reservation})
  }

}
