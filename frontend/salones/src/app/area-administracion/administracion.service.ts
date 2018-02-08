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
      let oneRoom: string=this.coneccion+"rooms"+"/"+name;
      return this.http.get(oneRoom).map((res:Response) => res.json());
      }

  getRooms(): Observable <any>{
        let oneRoom: string=this.coneccion+"rooms";
        return this.http.get(oneRoom).map((res:Response) => res.json());
      }
  insertRoom(salon): Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.coneccion + "rooms/5a552002110466aafe6141e9",salon, options)
                   .map((res:Response)=>res.json());
  }
  updateRoom(salon): Observable<any>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(this.coneccion + "rooms/5a552002110466aafe6141e9/"+salon._id,salon, options)
                   .map((res:Response)=>res.json());

      }
   deleteRoom(id): Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(this.coneccion + "rooms/5a552002110466aafe6141e9/"+id, options)
               .map((res:Response)=>res.json());
   }

 //Menu
  getMenu(name): Observable <any>{
    let oneRoom: string=this.coneccion+"menus"+"/"+name;
    return this.http.get(oneRoom).map((res:Response) => res.json());
    }

  getMenus(): Observable <any>{
      let oneRoom: string=this.coneccion+"menus";
      return this.http.get(oneRoom).map((res:Response) => res.json());
    }
  insertMenu(menu): Observable<any>{
  let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.coneccion + "menus/5a552002110466aafe6141e9",menu, options)
                 .map((res:Response)=>res.json());
  }
  updateMenu(menu): Observable<any>{
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.put(this.coneccion + "menus/5a552002110466aafe6141e9/"+menu._id,menu, options)
                 .map((res:Response)=>res.json());

    }
  deleteMenu(id): Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(this.coneccion + "menus/5a552002110466aafe6141e9/"+id, options)
             .map((res:Response)=>res.json());
  }

//clientes
  getUsuario(id): Observable <any>{
    let oneRoom: string=this.coneccion+"users"+"/5a552002110466aafe6141e9"+"/"+id;
    return this.http.get(oneRoom).map((res:Response) => res.json());
    }

  getUsuarios(): Observable <any>{
    let oneRoom: string=this.coneccion+"users/5a552002110466aafe6141e9";
    return this.http.get(oneRoom).map((res:Response) => res.json());
    }
  insertUsuario(usuario): Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.coneccion + "users/5a552002110466aafe6141e9",usuario, options)
               .map((res:Response)=>res.json());
    }
  updateUsuario(usuario): Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.coneccion + "users/5a552002110466aafe6141e9",usuario, options)
               .map((res:Response)=>res.json());
    }
  deleteUsuario(id): Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(this.coneccion + "users/5a552002110466aafe6141e9/"+id, options)
           .map((res:Response)=>res.json());
    }

    //reservas
    getReserva(id): Observable <any>{
      let oneRoom: string=this.coneccion+"reservation"+"/5a552002110466aafe6141e9"+"/"+id;
      return this.http.get(oneRoom).map((res:Response) => res.json());
      }

    getReservas(): Observable <any>{
      let oneRoom: string=this.coneccion+"reservation/5a552002110466aafe6141e9";
      return this.http.get(oneRoom).map((res:Response) => res.json());
      }
    insertReserva(reserva): Observable<any>{
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.coneccion + "reservation/5a552002110466aafe6141e9",reserva, options)
                 .map((res:Response)=>res.json());
      }
    updateReserva(reserva): Observable<any>{
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.put(this.coneccion + "reservation/5a552002110466aafe6141e9",reserva, options)
                 .map((res:Response)=>res.json());
      }
    deleteReserva(id): Observable<any>{
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.delete(this.coneccion + "reservation/5a552002110466aafe6141e9/"+id, options)
             .map((res:Response)=>res.json());
      }

    //seña
    getSeñas(idReserva){
      let señas: string=this.coneccion+"sings"+"/"+idReserva;
      return this.http.get(señas).map((res:Response) => res.json());
    }
    //
}
