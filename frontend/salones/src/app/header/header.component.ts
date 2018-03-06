import { Component, OnInit } from '@angular/core';
import { SalonesService } from '../service/salones.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mail:string;
  admin:boolean;
  logued:boolean;
  isAdmin:boolean;
  isClient:boolean;
  isLogued:boolean;
  isNotLogued:boolean;
  rooms:any=[{name:"",_id:""}]
  constructor(
    private service:SalonesService,
    private router:Router) {

  }

  ngOnInit() {
    this.service.getRooms().subscribe(rooms=>{ this.rooms=rooms})
    this.service.checklogin().subscribe( admin => {
      this.admin=admin;
      if(this.admin === null)
      {
          this.isAdmin = false;
          this.isClient = false;
      }
      else if(this.admin===true)
      {
          this.isAdmin = true;
          this.isClient = false;
      }
      else if(this.admin===false){
        this.isAdmin = false;
        this.isClient = true;
      }
    });
   this.service.checklogued().subscribe( logued => {
     this.logued = logued;
     if(this.logued === false){
       this.isLogued = false;
       this.isNotLogued = true;
     }
     else{
       this.isLogued = true;
       this.isNotLogued = false;
     }
   });
   this.service.logued().subscribe( mail => {
     this.mail = mail;
   });
 }

  destroySession(){
    this.service.destroy().subscribe( () => {})
    window.location.reload();
    window.location.href = "/";
  }

}
