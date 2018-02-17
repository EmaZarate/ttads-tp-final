import { Injectable } from '@angular/core';
import{Headers, Http, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable }  from 'rxjs/Observable';

@Injectable()
export class GuestService {
  coneccion: String="http://localhost:3000/api/";
  constructor(private http:Http) { }

  getReservation(id_client): Observable <any>{
    let oneRoom: string = this.coneccion+"users"+"/5a552002110466aafe6141e9"+"/"+id_client;
    return this.http.get(oneRoom).map((res:Response) => res.json());
  }
}
