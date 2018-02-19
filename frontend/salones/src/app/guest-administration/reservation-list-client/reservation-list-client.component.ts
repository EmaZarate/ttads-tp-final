import { Component, OnInit } from '@angular/core';
import {GuestService} from '../guest.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-reservation-list-client',
  templateUrl: './reservation-list-client.component.html',
  styleUrls: ['./reservation-list-client.component.css']
})
export class ReservationListClientComponent implements OnInit {
  reservations:any
  constructor(private service:GuestService, private router:Router) { }

  ngOnInit() {
     this.service.getReservations().subscribe((reservations)=>{ this.reservations=reservations})
  }

  goReservation(id){
    this.router.navigate(['/tus-reservas', id]);
  }
  
}
