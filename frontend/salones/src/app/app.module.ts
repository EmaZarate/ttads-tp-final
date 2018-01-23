import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { SalonesService } from './service/salones.service';
import { SalonComponent } from './salones/salon/salon.component';
//import {AreaAdministracionModule} from './area-administracion/area-administracion.module';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PrincipalComponent,
    SalonComponent,


  ],
  imports: [
    BrowserModule,
    //AreaAdministracionModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [SalonesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
