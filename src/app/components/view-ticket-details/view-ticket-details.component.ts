import { Component, OnInit, Inject } from '@angular/core';
import { RemoteTicketService } from '../../remote-ticket-service';
import { Router } from '@angular/router';
import { Ticket } from '../view-tickets/view-tickets.component';
import { ActivatedRoute } from '@angular/router';
import { ErrorService } from '../../error-service';

@Component({
  selector: 'app-view-ticket-details',
  templateUrl: './view-ticket-details.component.html',
  styleUrls: ['./view-ticket-details.component.css']
})
export class ViewTicketDetailsComponent implements OnInit {
  ticket: Ticket = new Ticket();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    @Inject('RemoteTicketService') private ticketService: RemoteTicketService,
    @Inject('ErrorService') private errorService: ErrorService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        console.log(params);
        const ticketId = params['ticketId'];
        this.getTicketById(ticketId);
      },
      error => {
        this.errorService.error(error);
      }
    );
  }

  getTicketById(ticketId: string) {
    const token = localStorage.getItem('userlogin');
    this.ticketService.getTicketById(token, ticketId).subscribe(
      ticket => {
        this.ticket = ticket;
      },
      error => {
        this.errorService.error(error);
      }
    );
  }
}
