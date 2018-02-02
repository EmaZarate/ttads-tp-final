import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {AdministracionService} from '../administracion.service'

@Component({
  selector: 'app-señas',
  templateUrl: './señas.component.html',
  styleUrls: ['./señas.component.css']
})
export class SeñasComponent implements OnInit {
  idReserva:String;
  señas:any={};

  constructor(
    private route:ActivatedRoute,
    private service:AdministracionService,
    private router:Router
  ) { }

  ngOnInit() {
    this.idReserva = this.route.snapshot.paramMap.get('id');
    if(this.idReserva===null){
        
    }
    else{
      this.service.getRoom(this.idReserva).subscribe( señas=>{ this.señas=señas[0] } );
    }
  }
}
