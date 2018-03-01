import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import {GuestService} from '../guest.service'

@Component({
  selector: 'app-list-guest',
  templateUrl: './list-guest.component.html',
  styleUrls: ['./list-guest.component.css']
})
export class ListGuestComponent implements OnInit {
  @Input() guest:any
  @Input() deletedGuestbool:boolean
  @Input() id:any
  @Input() i
  @Output() deleted = new EventEmitter<boolean>();

  //guest:any={name:"",surname:"",phone:"",payCard:""}
  updateGuestBool: Array<boolean>=[false,false]

  
  constructor(private service:GuestService) { }

  ngOnInit() {
    this.initArrayGuest()
  }

  initArrayGuest(){
    for (let index = 0; index < 100; index++) {
      this.updateGuestBool[index]=false; 
    }
    this.updateGuestBool
  }

  GuestBool(i){
    if(this.updateGuestBool[i]){
      this.updateGuestBool[i]=false
    }
      else{
        this.updateGuestBool[i]=true
      }
  }

  deletedGuest(id_guest){
    this.service.deleteGuest(id_guest,this.id).subscribe(()=>{
      this.deleted.emit(true)
    })
  }
  
  updateGuest(id,name,surname,phone,payCard,i){
    let guest:any={name:"",surname:"",phone:"",payCard:""}
    guest._id=id
    guest.name=name;
    guest.surname=surname;
    guest.phone=phone;
    guest.payCard=payCard;
    this.service.updateGuest(guest).subscribe(()=>{
      //this.service.getReservation(this.id).subscribe( reservation=> {this.reservation=reservation});
      this.GuestBool(i)
      this.deleted.emit(true)
    });
  }
  
 
}
