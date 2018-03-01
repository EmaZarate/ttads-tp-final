import { Injectable } from '@angular/core';

import{Headers, Http, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class AdministracionService {

  constructor(private http:Http) { }
 coneccion: String="http://localhost:3000/api/"

 //Room

  getRoom(name): Observable <any>{
      let oneRoom: string=this.coneccion+"rooms/"+name;
      return this.http.get(oneRoom).map((res:Response) => res.json());
      }

  getRooms(): Observable <any>{
        let oneRoom: string=this.coneccion+"rooms";
        return this.http.get(oneRoom).map((res:Response) => res.json());
      }
  insertRoom(salon): Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.coneccion + "rooms/",salon, options)
                   .map((res:Response)=>res.json());
  }
  updateRoom(salon): Observable<any>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(this.coneccion + "rooms/"+salon._id,salon, options)
                   .map((res:Response)=>res.json());

      }
   deleteRoom(id): Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(this.coneccion + "rooms/"+id, options)
               .map((res:Response)=>res.json());
   }

 //Menu
  getMenu(name): Observable <any>{
    let oneMenu: string=this.coneccion+"menus/"+name;
    return this.http.get(oneMenu).map((res:Response) => res.json());
    }

  getMenus(): Observable <any>{
      let oneMenu: string=this.coneccion+"menus";
      return this.http.get(oneMenu).map((res:Response) => res.json());
    }
  insertMenu(menu): Observable<any>{
  let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.coneccion + "menus/",menu, options)
                 .map((res:Response)=>res.json());
  }
  updateMenu(menu): Observable<any>{
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.put(this.coneccion + "menus/"+menu._id,menu, options)
                 .map((res:Response)=>res.json());

    }
  deleteMenu(id): Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(this.coneccion + "menus/"+id, options)
             .map((res:Response)=>res.json());
  }

//clientes
  getUsuario(id): Observable <any>{
    let oneUser: string=this.coneccion+"users/"+id;
    return this.http.get(oneUser).map((res:Response) => res.json());
    }

  getUsuarios(): Observable <any>{
    let oneUser: string=this.coneccion+"users";
    return this.http.get(oneUser).map((res:Response) => res.json());
    }
  insertUsuario(usuario): Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.coneccion + "users/",usuario, options)
               .map((res:Response)=>res.json());
    }
  updateUsuario(usuario): Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.coneccion + "users/"+usuario._id,usuario, options)
               .map((res:Response)=>res.json());
    }
  deleteUsuario(id): Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(this.coneccion + "users/"+id, options)
           .map((res:Response)=>res.json());
    }

    //reservas
    getReserva(id): Observable <any>{
      let oneReservation: string=this.coneccion+"reservation/"+id;
      return this.http.get(oneReservation).map((res:Response) => res.json());
      }

    getReservas(): Observable <any>{
      let oneReservation: string=this.coneccion+"reservation";
      return this.http.get(oneReservation).map((res:Response) => res.json());
      }
    insertReserva(reserva): Observable<any>{
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.coneccion + "reservation/",reserva, options)
                 .map((res:Response)=>res.json());
      }
    updateReserva(reserva): Observable<any>{
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.put(this.coneccion + "reservation/"+reserva._id,reserva, options)
                 .map((res:Response)=>res.json());
      }
    deleteReserva(id): Observable<any>{
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.delete(this.coneccion + "reservation/"+id, options)
             .map((res:Response)=>res.json());
      }

    //seña
    insertSena(sing,id_reserva): Observable<any>{
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.coneccion + "signs/"+id_reserva,sing, options)
                 .map((res:Response)=>res.json());
      }
    //
}
