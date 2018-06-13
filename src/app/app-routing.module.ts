import { ViewTicketDetailsComponent } from './components/view-ticket-details/view-ticket-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { LoginComponent } from './components/login/login.component';
import { ViewTicketsComponent } from './components/view-tickets/view-tickets.component';
import { AuthGuard } from './auth-guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: ViewTicketsComponent, canActivate: [AuthGuard] },
  { path: 'viewtickets', component: ViewTicketsComponent, canActivate: [AuthGuard] },
  { path: 'createticket', component: CreateTicketComponent, canActivate: [AuthGuard] },
  { path: 'viewticketdetails/:ticketId', component: ViewTicketDetailsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'viewtickets' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
