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
  reserva:any={"room":{"_id":""},"menu":{"_id":""},"client":{"_id":""},type:""};
  salones:any=[];
  clientes:any=[];
  menus:any=[];
  senas:any=[];
  sena:any={"amount":0};
  listaSign:boolean=true;
  alertSign:boolean=true;
  alertSignSave:boolean=true;
  buttonSaveSign:boolean=false;
  deletedSing:boolean=true;
 


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
      this.service.getReserva(this.id).subscribe( reserva=>{ 
        this.reserva=reserva;
        this.senas=this.reserva.sign
      });
    }
  }
  
  goBack(){
    this.router.navigate(['/administracion/reservas']);
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
    this.reserva.menu=menu
    this.reserva.cantAdultPeople=adultos;
    this.reserva.cantChildren=menores;
    this.reserva.cantBaby=bebes;
    this.reserva.state=estado;
    this.reserva.extraHourPrice=precioHoraExtra;
    this.reserva.description=descripcion;
    this.reserva.amount=monto
  
    if(this.id===null){
      this.service.insertReserva(this.reserva).subscribe((reserva)=>{
        if(this.sena.amount===0){
          this.router.navigate(['/administracion/reservas'])
        }
        else{
          this.service.insertSena(this.sena,reserva._id).subscribe(()=>{
            this.router.navigate(['/administracion/reservas'])
          });
        }
      })
    }
    else{
      this.service.updateReserva(this.reserva).subscribe((reserva)=>{
        this.router.navigate(['/administracion/reservas'])
      })
    }
  }

  listaSenas(){
    if(this.listaSign===true){
        this.listaSign=false
    }
    else{
        this.listaSign=true
    }
  }
  guardarPago(monto,fecha){
    this.sena.amount=monto;
    this.sena.date=fecha;
    if(this.id===null){
      if(this.alertSign===true){
        this.alertSign=false
      }
      else{
        this.alertSign=true
      }
    }
    else{
      this.service.insertSena(this.sena,this.id).subscribe(()=>{
        this.service.getReserva(this.id).subscribe( reserva=>{ 
          this.reserva=reserva;
          this.senas=this.reserva.sign
        });
      })
      if(this.alertSignSave===true){
        this.alertSignSave=false
      }
      else{
        this.alertSignSave=true
      }
    }
    if(this.buttonSaveSign===true){
      this.buttonSaveSign=false
    }
    else{
      this.buttonSaveSign=true
    }
  }
  buttonDeletedSign(){
    if(this.deletedSing){
      this.deletedSing=false
    }
    else{
      this.deletedSing=true
    }
  }
  deletedSign(id){
     this.service.deleteSign(id).subscribe((reserva)=>{
   
        this.reserva=reserva;
        this.senas=this.reserva.sign
      
     });
  }

}
