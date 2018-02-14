import { Component, OnInit } from '@angular/core';
import { AdministracionService} from '../administracion.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:any;
  delete:boolean=true;

  constructor(private service:AdministracionService,private router:Router) { }

  ngOnInit() {
    this.service.getUsuarios().subscribe( usuarios => {this.usuarios=usuarios} );
  }

  deleted(){
    if(this.delete===true){
      this.delete=false;
    }
    else{
      this.delete=true;
    }
  }
  deleteUsuario(id){
    this.service.deleteUsuario(id).subscribe(()=>{
      this.ngOnInit()
    })
  }
  goNewUsuario(){
    this.router.navigate(['/administracion/usuario'])
  }
  goUsuario(id){
    this.router.navigate(['/administracion/usuario', id]);
  }

}
