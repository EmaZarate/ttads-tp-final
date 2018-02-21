import { Injectable } from '@angular/core';
import{Headers, Http, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable }  from 'rxjs/Observable';

@Injectable()
export class GuestService {
  coneccion: string="http://localhost:3000/api/";
  constructor(private http:Http) { }


  getReservations(): Observable<any>{
     let reservation:string = this.coneccion+"guests"
     return this.http.get(reservation).map((res:Response)=>res.json())
  }
  getReservation(id):Observable<any>{
    let reservation:string = this.coneccion+"guests/"+id
    return this.http.get(reservation).map((res:Response)=>res.json())
  }
  saveGuest(guest,id_reservation){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.coneccion + "guests/"+id_reservation,guest, options)         
  }
  deleteGuest(id_guest,id_reservation): Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(this.coneccion + "guests/"+id_guest+"/"+id_reservation, options)
   }
}
