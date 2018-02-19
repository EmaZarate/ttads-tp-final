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
}
