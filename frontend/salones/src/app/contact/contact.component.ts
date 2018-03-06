import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lat: number =-32.9987804
  lng: number = -60.7711256
  constructor() { }

  ngOnInit() {
  }

}
