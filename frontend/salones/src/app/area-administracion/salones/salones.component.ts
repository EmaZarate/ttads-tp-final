import { Component, OnInit } from '@angular/core';
import {AdministracionService} from '../administracion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administracion',
  templateUrl: './salones.component.html',
  styleUrls: ['./salones.component.css']
})
export class SalonesComponent implements OnInit {
  salones:any;
  constructor(private service:AdministracionService,private router:Router) { }

  ngOnInit() {
    this.service.getRooms().subscribe( salones => {this.salones=salones} );
  }

  goSalon(id){
    this.router.navigate(['/administracion/salon', id]);
  }
}
