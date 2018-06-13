import { AuthGuard } from './auth-guard';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { LoginComponent } from './components/login/login.component';
import { ViewTicketsComponent } from './components/view-tickets/view-tickets.component';
import { RemoteLoginService } from './remote-login-service';
import { RemoteTicketService } from './remote-ticket-service';
import { RemoteUnitService } from './remote-unit-service';
import { ViewTicketDetailsComponent } from './components/view-ticket-details/view-ticket-details.component';
import { ErrorHandlerComponent } from './components/error-handler/error-handler.component';
import { ErrorService } from './error-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewTicketsComponent,
    CreateTicketComponent,
    ViewTicketDetailsComponent,
    ErrorHandlerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    AuthGuard,
    {
      provide: 'RemoteLoginService',
      useClass: RemoteLoginService
    },
    {
      provide: 'RemoteTicketService',
      useClass: RemoteTicketService
    },
    {
      provide: 'RemoteUnitService',
      useClass: RemoteUnitService
    },
    {
      provide: 'ErrorService',
      useClass: ErrorService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
