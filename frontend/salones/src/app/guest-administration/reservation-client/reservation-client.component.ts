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
  reservation:any={guest:[],room:{name:""},menu:{name:""}}
  guest:any={name:"",surname:"",phone:"",payCard:""}
  guests:any=[];
  fullList:boolean;


  newGuestbool:boolean=true
  deletedGuestbool:boolean=false


  constructor(private activatedRoute:ActivatedRoute, private service:GuestService) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.getReservation(this.id).subscribe( reservation=> {this.reservation=reservation})

  }

  newGuest(){
    if(this.newGuestbool){
      this.newGuestbool=false
    }
    else{
      this.newGuestbool=true
    }
  }

  deletedGuestButton(){
    if(this.deletedGuestbool){
      this.deletedGuestbool=false
    }
    else{
      this.deletedGuestbool=true
    }
  }

  deletedAndUpdate(event:boolean){
    this.service.getReservation(this.id).subscribe( reservation=> {this.reservation=reservation})
  }

  saveGuest(name,surname,phone,payCard){
    this.guest.name=name;
    this.guest.surname=surname;
    this.guest.phone=phone;
    this.guest.payCard=payCard;
    this.service.saveGuest(this.guest,this.id).subscribe(()=>{
      this.service.getReservation(this.id).subscribe( reservation=> {this.reservation=reservation;
      if(this.reservation.cantInvitados === this.reservation.guest.length){
          alert("La lista de clientes se encuentra llena!")
          this.fullList = false;
        }
        else{
          this.fullList = true;
        }
      this.newGuest();
      this.guest={name:"",surname:"",phone:"",payCard:""}
      })
    });
  }


}
