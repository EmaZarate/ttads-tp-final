import { Component, OnInit } from '@angular/core';
import {AdministracionService} from '../administracion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administracion',
  templateUrl: './salones.component.html',
  styleUrls: ['./salones.component.css']
})
export class SalonesComponent implements OnInit {
  salones:any;
  delete:boolean=true;

  constructor(private service:AdministracionService,private router:Router) { }

  ngOnInit() {
    this.service.getRooms().subscribe( salones => {this.salones=salones} );
  }

  deleted(){
    if(this.delete===true){
      this.delete=false;
    }
    else{
      this.delete=true;
    }
  }
  deleteRoom(id){
    this.service.deleteRoom(id).subscribe(()=>{
      window.location.reload(true);
    })
  }
  goNewSalon(){
    this.router.navigate(['/administracion/salon'])
  }
  goSalon(id){
    this.router.navigate(['/administracion/salon', id]);
  }
}
