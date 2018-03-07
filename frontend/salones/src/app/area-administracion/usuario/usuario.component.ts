import { Component, OnInit } from '@angular/core';
import {AdministracionService} from '../administracion.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  id:String;
  usuario:any={};
  primerPermiso:String="Cliente";
  segundoPermiso:String="Administrador";
  value1Permiso:String="client";
  value2Permiso:String="administrador";

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
      this.service.getUsuario(this.id).subscribe( usuario=>{ this.usuario=usuario[0] 
        this.seleccionarPermiso();} );
      
    }
  }

  seleccionarPermiso(){
    if(this.usuario.permits.type==="administrador"){
      this.primerPermiso="Administrador";
      this.segundoPermiso = "Cliente"
      this.value1Permiso="administrador"
      this.value2Permiso="client"
    }
  }

  goBack(){
    this.router.navigate(['/administracion/usuarios']);
  }

  save(name,surname,phone,address,email,password,tipo){
    if(this.checkForm(name,surname,phone,address,email,password,tipo)){
      this.usuario.name=name;
      this.usuario.surname=surname;
      this.usuario.phone=phone;
      this.usuario.address=address;
      this.usuario.email=email;
      this.usuario.password=password;
      this.usuario.permission=tipo
      if(this.id===null){
         this.service.insertUsuario(this.usuario).subscribe(()=>{
          this.router.navigate(['/administracion/usuarios'])
         });
      }
      else{
        this.service.updateUsuario(this.usuario).subscribe(()=>{
          this.router.navigate(['/administracion/usuarios'])
        });
      }
    }
    else{
      alert("Ingrese todos los campos")
    }
  }
  checkForm(name,surname,phone,address,email,password,tipo){
     if(name==="" || surname==="" || phone==="" || address==="" || email==="" || password==="" || tipo===""){
       return false
     }
     else{
       return true
     }
  }

}
