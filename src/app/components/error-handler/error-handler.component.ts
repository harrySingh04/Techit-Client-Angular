import { Component, OnInit, Inject } from '@angular/core';
import { ErrorService } from '../../error-service';

@Component({
  selector: 'app-error',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.css']
})
export class ErrorHandlerComponent implements OnInit {
  message: any;

  constructor(@Inject('ErrorService') private errorService: ErrorService) {}

  ngOnInit() {
    this.errorService.getMessage().subscribe(message => {
      this.message = message;
    });
  }
}
