import { Component, OnInit } from '@angular/core';
import { SalonesService } from '../service/salones.service';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any;


  constructor(private service:SalonesService, private router:Router) { }

  ngOnInit() {

  }

  login(email, password){
   if((email==="") || (password==="")){
     alert("Ingrese todos los campos");
     this.router.navigate(['/login'])
   }
   else{
    this.service.login(email,password).subscribe(user=>{
      this.user=user;
         if(user === null){
           alert("Usuario Inexistente");
           this.router.navigate(['/login'])
         }
         else{
           window.location.reload();
         }
     })
   }
 
  }
}
