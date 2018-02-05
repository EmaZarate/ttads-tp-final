import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap, Router } from '@angular/router';
import {AdministracionService} from '../administracion.service'
import { Data } from '@angular/router/src/config';


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
  save(name,address,capacity,description){
    /*this.salon.name=name;
    this.salon.address=address;
    this.salon.capacity=capacity;
    this.salon.description=description;
    if(this.id===null){
       this.service.insertRoom(this.salon).subscribe(()=>{
        this.router.navigate(['/administracion/salones'])
       });
    }
    else{
      this.service.updateRoom(this.salon).subscribe(()=>{
        this.router.navigate(['/administracion/salones'])
      });
    }*/
    
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
