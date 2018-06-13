import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { User } from './components/login/login.component';

@Injectable()
export class RemoteLoginService {
  constructor(private http: HttpClient) {}

  login(user: User): Observable<string> {
    return this.http.post(
      '/api/login',
      {
        username: user.username,
        password: user.password
      },
      {responseType: 'text'}
    );
  }
}
