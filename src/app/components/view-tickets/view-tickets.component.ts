import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { RemoteTicketService } from '../../remote-ticket-service';
import { ErrorService } from '../../error-service';

export class Ticket {
  _id: string;
  subject: string;
  status: string;
  priority: string;
  details: string;
  creationDate: Date;
  lastUpdateDate: Date;
  updates: [
    {
      _id: string;
      modifiedUser: string;
      modifiedDate: Date;
      details: string;
    }
  ];
}

@Component({
  selector: 'app-view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrls: ['./view-tickets.component.css']
})
export class ViewTicketsComponent implements OnInit {
  tickets: Ticket[] = [];

  constructor(
    private router: Router,
    @Inject('RemoteTicketService') private ticketService: RemoteTicketService,
    @Inject('ErrorService') private errorService: ErrorService
  ) {
    this.getUserTickets();
  }

  ngOnInit() {}

  getUserTickets() {
    const token = localStorage.getItem('userlogin');
    this.ticketService.getUserTickets(token).subscribe(
      tickets => {
        this.tickets = tickets;
      },
      error => {
        this.errorService.error(error);
      }
    );
  }
}
