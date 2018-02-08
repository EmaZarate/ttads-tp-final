import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap, Router } from '@angular/router';
import {AdministracionService} from '../administracion.service'
import { Data } from '@angular/router/src/config';
import { Time } from '@angular/common/src/i18n/locale_data_api';


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  id:String;
  reserva:any={};
  salones:any=[];
  clientes:any=[];
  menus:any=[];
  senas:any=[];
  sena:any={};
  lista:boolean=true;
  tiempoPrueba:Time
  constructor(
    private route:ActivatedRoute,
    private service:AdministracionService,
    private router:Router
  ) { }

  ngOnInit() {
    this.service.getRooms().subscribe(salones=>{ this.salones=salones });
    this.service.getUsuarios().subscribe(clientes=>{ this.clientes=clientes });
    this.service.getMenus().subscribe(menus=>{ this.menus=menus });
    
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id===null){
        
    }
    else{
      this.service.getReserva(this.id).subscribe( reserva=>{ this.reserva=reserva[0] } );
      this.service.getSeñas(this.id).subscribe( señas => {this.senas=señas});
    }
    
  }
  goBack(){
    this.router.navigate(['/administracion/salones']);
  }
  save(fecha, tipo, inicio, fin, salon,
    cliente, menu, adultos, menores, bebes, estado, precioHoraExtra, monto, descripcion){
    inicio=fecha+"T"+inicio+":00.000Z";
    fin=fecha+"T"+fin+":00.000Z";
    this.reserva.date=fecha;
    this.reserva.type=tipo;
    this.reserva.startTime=inicio;
    this.reserva.endTime=fin;
    this.reserva.room=salon;
    this.reserva.client=cliente;
    this.reserva.menu=menu;
    this.reserva.cantAdultPeople=adultos;
    this.reserva.cantChildren=menores;
    this.reserva.cantBaby=bebes;
    this.reserva.state=estado;
    this.reserva.extraHourPrice=precioHoraExtra;
    this.reserva.description=descripcion;
    this.reserva.amount=monto;
    this.service.insertReserva(this.reserva).subscribe((reserva)=>{
      if(this.sena==={}){
        this.router.navigate(['/administracion/reservas'])
      }
      else{
        this.service.insertSena(this.sena,reserva._id).subscribe(()=>{
          this.router.navigate(['/administracion/reservas'])
        });
      }
    })
   

  }
  listaSenas(){
    if(this.lista===true){
        this.lista=false
    }
    else{
        this.lista=true
    }
  }
  guardarPago(monto,fecha){
    this.sena.amount=monto;
    this.sena.date=fecha;
  }

}
