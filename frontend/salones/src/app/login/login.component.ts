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
      // this.service.login("claudiaangelamerlo1965@gmail.com","claudia1965").subscribe(user=>this.user=user[0])
  }

  login(email, password){

    this.service.login(email,password).subscribe(user=>{
       this.user=user[0];
  })
  }
}
