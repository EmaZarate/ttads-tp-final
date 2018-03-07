import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AdministracionService} from '../administracion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  id:String;
  menu:any={};

  constructor(
    private route:ActivatedRoute,
    private service:AdministracionService,
    private router:Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id===null){
        
    }
    else{
      this.service.getMenu(this.id).subscribe( menu=>{ this.menu=menu[0] } );
    }
    
  }
  goBack(){
    this.router.navigate(['/administracion/menus']);
  }
  save(name,price,drink,starter,mainCourse,dessert){
    if(this.checkForm(name,price,drink,starter,mainCourse,dessert)){
      this.menu.name=name;
      this.menu.price=price;
      this.menu.drink=drink;
      this.menu.starter=starter;
      this.menu.mainCourse=mainCourse;
      this.menu.dessert=dessert;
      if(this.id===null){
         this.service.insertMenu(this.menu).subscribe(()=>{
          this.router.navigate(['/administracion/menus'])
         });
      }
      else{
        this.service.updateMenu(this.menu).subscribe(()=>{
          this.router.navigate(['/administracion/menus'])
        });
      }
    }
    else{
      alert("Complete todos los campos")
    }
    
  }
  checkForm(name,price,drink,starter,mainCourse,dessert):boolean{
    if(name==="" || price==="" || drink==="" || starter==="" || mainCourse==="" || dessert===""){
      return false
    }
    else{
      return true
    }
  }
  

}
