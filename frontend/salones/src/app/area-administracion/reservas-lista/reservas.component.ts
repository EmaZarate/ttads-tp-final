import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AdministracionService} from '../administracion.service'

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  reservas:any=[]
  delete:Boolean=true;

  constructor(private service:AdministracionService,private router:Router) { }

  ngOnInit() {
    this.service.getReservas().subscribe( reservas => {this.reservas=reservas} );
  }

  deleted(){
    if(this.delete===true){
      this.delete=false;
    }
    else{
      this.delete=true;
    }
  }
  deleteReservation(id){
    this.service.deleteReserva(id).subscribe(()=>{
      this.ngOnInit()
    })
  }
  goNewReservation(){
    this.router.navigate(['/administracion/reserva'])
  }
  goReservation(id){
    this.router.navigate(['/administracion/reserva', id]);
  }

}
