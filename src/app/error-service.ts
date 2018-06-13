import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ErrorService {
  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;

  constructor(private router: Router) {
    // clear error message on route change
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterNavigationChange) {
          // only keep for a single location change
          this.keepAfterNavigationChange = false;
        } else {
          // clear error
          this.subject.next();
        }
      }
    });
  }

  success(message: any, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'success', text: message });
  }

  error(message: any, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'error', text: this.getErrorText(message) });
  }

  getErrorText(message) {
    try {
      if (message.error) {
        if (message.error.message) {
          return message.error.message;
        } else {
          return JSON.parse(message.error).message;
        }
      } else {
        return JSON.parse(message).message;
      }
    } catch (e) {
      return message;
    }
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
