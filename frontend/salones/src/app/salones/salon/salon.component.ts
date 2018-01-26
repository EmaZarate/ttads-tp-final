import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-salon-inicio',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css']
})
export class SalonComponent implements OnInit {
  @Input() room :any;
  
  constructor() { }

  ngOnInit() {
  }

}
