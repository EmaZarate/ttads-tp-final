import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import {AdministracionService} from '../administracion.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css']
})
export class SalonComponent implements OnInit {
  id:String;
  salon:any={};
  constructor(
    private route:ActivatedRoute,
    private service:AdministracionService,
    private router:Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id===null){

    }
    else{
      this.service.getRoom(this.id).subscribe( salon=>{ this.salon=salon[0] } );
    }

  }
  goBack(){
    this.router.navigate(['/administracion/salones']);
  }
  save(name,address,capacity,description,latitude,longitude,front,long,inclined){
    this.salon.name=name;
    this.salon.address=address;
    this.salon.capacity=capacity;
    this.salon.description=description;
    this.salon.latitude=latitude;
    this.salon.longitude=longitude;
    this.salon.images.front=front;
    this.salon.images.long=long;
    this.salon.images.inclined=inclined;

    if(this.id===null){
       this.service.insertRoom(this.salon).subscribe(()=>{
        this.router.navigate(['/administracion/salones'])
       });
    }
    else{
      this.service.updateRoom(this.salon).subscribe(()=>{
        this.router.navigate(['/administracion/salones'])
      });
    }

  }
}
