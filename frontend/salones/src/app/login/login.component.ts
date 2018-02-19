import { Component, OnInit } from '@angular/core';
import { SalonesService } from '../service/salones.service'
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any;


  constructor(private service:SalonesService) { }

  ngOnInit() {

  }

  login(email, password){

    this.service.login(email,password).subscribe(user=>{
       this.user=user;
       window.location.reload();
  })
  }
}
