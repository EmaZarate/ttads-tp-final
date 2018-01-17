import { Component, OnInit } from '@angular/core';
import {SalonesService} from '../service/salones.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  matisa:any;

  constructor(private service:SalonesService) {}

  ngOnInit() {
    this.service.getRoom("Matisa").subscribe(room =>{this.matisa=room[0]})
  }

}
