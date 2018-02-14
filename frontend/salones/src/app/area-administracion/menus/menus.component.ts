import { Component, OnInit } from '@angular/core';
import {AdministracionService} from '../administracion.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  menus:any;
  delete:boolean=true;

  constructor(private service:AdministracionService,private router:Router) { }

  ngOnInit() {
    this.service.getMenus().subscribe( menus => {this.menus=menus} );
  }

  deleted(){
    if(this.delete===true){
      this.delete=false;
    }
    else{
      this.delete=true;
    }
  }
  deleteMenu(id){
    this.service.deleteMenu(id).subscribe(()=>{
      this.ngOnInit()
    })
  }
  goNewMenu(){
    this.router.navigate(['/administracion/menu'])
  }
  goMenu(id){
    this.router.navigate(['/administracion/menu', id]);
  }

}
