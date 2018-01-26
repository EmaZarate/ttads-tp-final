import { Injectable } from '@angular/core';

import{Headers, Http, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class AdministracionService {

  constructor(private http:Http) { }
 coneccion: String="http://localhost:3000/api/"



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
  


}
