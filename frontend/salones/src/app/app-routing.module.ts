import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {PrincipalComponent} from './principal/principal.component';
import {PaginaNoEncontradaComponent} from './paginaNoEncontrada/paginaNoEncontrada.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'principal', component: PrincipalComponent},
  { path: 'administracion', loadChildren: 'app/area-administracion/area-administracion.module#AreaAdministracionModule'},
  { path: 'tus-reservas', loadChildren: 'app/guest-administration/guest-administration.module#GuestAdministrationModule'},
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],

})
export class AppRoutingModule {
}
