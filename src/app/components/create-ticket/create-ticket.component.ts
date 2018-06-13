import { Component, OnInit, Inject } from '@angular/core';
import { RemoteTicketService } from '../../remote-ticket-service';
import { Router } from '@angular/router';
import { Ticket } from '../view-tickets/view-tickets.component';
import { RemoteUnitService } from '../../remote-unit-service';
import { ErrorService } from '../../error-service';

export class Unit {
  _id: string;
  name: string;
  phone: string;
  email: string;
  location: string;
  description: string;
}

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {
  units: Unit[] = [];
  ticket: Ticket = new Ticket();

  constructor(
    private router: Router,
    @Inject('RemoteTicketService') private ticketService: RemoteTicketService,
    @Inject('RemoteUnitService') private unitService: RemoteUnitService,
    @Inject('ErrorService') private errorService: ErrorService
  ) {
    this.getAllUnits();
  }

  ngOnInit() {}

  createTicket() {
    const token = localStorage.getItem('userlogin');
    this.ticketService.createTicket(token, this.ticket).subscribe(
      savedTciket => {
        this.router.navigate(['viewtickets']);
      },
      error => {
        this.errorService.error(error);
        this.router.navigate(['createticket']);
      }
    );
  }

  getAllUnits() {
    const token = localStorage.getItem('userlogin');
    this.unitService.getUnits(token).subscribe(units => {
      this.units = units;
    });
  }
}
