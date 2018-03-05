import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {SalonesService} from '../service/salones.service'

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  id:string
  room:any={name:"",description:"",capacity:"",address:"",latitude:"",longitude:""}
  lat: number
  lng: number
  constructor(private route:ActivatedRoute, private service:SalonesService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getRoom(this.id).subscribe(room=>{
      this.room=room[0]
      this.lat=this.room.latitude;
      this.lng=this.room.longitude;
    })
  }

}
