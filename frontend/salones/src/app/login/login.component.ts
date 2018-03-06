import { Component, OnInit } from '@angular/core';
import { SalonesService } from '../service/salones.service';
import { RouterModule, Routes } from '@angular/router';
import { Http } from '@angular/http';

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
  // var mail = document.getElementById("email").value;
  // var contra = document.getElementById("contrasena").value;
    this.service.login(email,password).subscribe(user=>{
       this.user=user;
  /*     if(mail === null || contra === null){
         alert("Debe Completar Todos Los Campos");
         window.location.href = "/login";
       }
       else{  */
          if(user === null){
            alert("Usuario Inexistente");
            window.location.href = "/login";
          }
          else{
            window.location.reload();
          }
    //  }
  })
  }
}
