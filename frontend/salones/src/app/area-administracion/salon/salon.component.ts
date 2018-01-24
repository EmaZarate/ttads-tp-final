import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import {AdministracionService} from '../administracion.service'
@Component({
  selector: 'app-administracion',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css']
})
export class SalonComponent implements OnInit {
  id:String;
  salon:any;
  constructor(private route:ActivatedRoute,private service:AdministracionService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getRoom(this.id).subscribe( salon=>{ this.salon=salon[0] } );
  }

}
