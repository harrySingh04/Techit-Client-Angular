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
import { Ticket } from './components/view-tickets/view-tickets.component';

@Injectable()
export class RemoteTicketService {
  constructor(private http: HttpClient) {}

  getUserTickets(token: string): Observable<Ticket[]> {
    return this.http.get<Ticket[]>('/api/tickets', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    });
  }

  createTicket(token: string, ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>('/api/tickets', ticket, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    });
  }

  getTicketById(token: string, ticketId: string): Observable<Ticket> {
    return this.http.get<Ticket>('/api/tickets/' + ticketId, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    });
  }
}
