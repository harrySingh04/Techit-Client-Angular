import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Unit } from './components/create-ticket/create-ticket.component';

@Injectable()
export class RemoteUnitService {
  constructor(private http: HttpClient) {}

  getUnits(token: string): Observable<Unit[]> {
    return this.http.get<Unit[]>('/api/units', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    });
  }
}
