import { Injectable } from '@angular/core';
import{Headers, Http, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class SalonesService {

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
  login(email,password): Observable<any>{
    let login: string = this.coneccion+"login"+"/"+email+"/"+password;
    return this.http.get(login).map((res:Response)=> res.json());
  }
  logued(): Observable<any>{
    let login: string = this.coneccion+"login";
    return this.http.get(login).map((res:Response) => res.json());
  }
  checklogin(): Observable<any>{
    let checklog: string = this.coneccion+"checkLogs";
    return this.http.get(checklog).map((res:Response) => res.json());
  }
  checklogued(): Observable<any>{
    let checklog: string = this.coneccion+"checkLoguedIns";
    return this.http.get(checklog).map((res:Response) => res.json());
  }
  destroy(): Observable<any>{
    let destroy: string = this.coneccion+"destroys";
    return this.http.get(destroy).map((res:Response) => res.json());
  }
}
