import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap, Router } from '@angular/router';
import {AdministracionService} from '../administracion.service'


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  id:String;
  reserva:any={}
  salones:any={};
  clientes:any={};
  menus:any={};

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

}
