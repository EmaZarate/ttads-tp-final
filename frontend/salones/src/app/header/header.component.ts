import { Component, OnInit } from '@angular/core';
import { SalonesService } from '../service/salones.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  admin:boolean;
  isAdmin:boolean;
  constructor(private service:SalonesService) { }

  ngOnInit() {
    
    this.service.checklogin().subscribe( admin => {
      this.admin=admin;
      if(this.admin === null)
      {
          this.isAdmin = false;
      }
      else
      {
          this.isAdmin = true;
      }
    });
  }

}
