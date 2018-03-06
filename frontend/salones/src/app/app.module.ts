import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { SalonesService } from './service/salones.service';
import { SalonComponent } from './salones/salon/salon.component';
import { PaginaNoEncontradaComponent } from './paginaNoEncontrada/paginaNoEncontrada.component';
import { RoomComponent } from './room/room.component';
import { ContactComponent } from './contact/contact.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PrincipalComponent,
    SalonComponent,
    PaginaNoEncontradaComponent,
    RoomComponent,
    ContactComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCDZLnlCSzobaPVN6vftlaBSvV2NHBnng0'
    })
  ],
  providers: [SalonesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
