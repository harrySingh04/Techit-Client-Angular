import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RemoteLoginService } from '../../remote-login-service';
import { ErrorService } from '../../error-service';

export class User {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  error: string = undefined;

  constructor(
    private router: Router,
    @Inject('RemoteLoginService') private loginService: RemoteLoginService,
    @Inject('ErrorService') private errorService: ErrorService
  ) {}

  ngOnInit() {}

  login() {
    this.loginService.login(this.user).subscribe(
      token => {
        console.log('token = ' + token);
        localStorage.setItem('userlogin', token);
        this.router.navigate(['viewtickets']);
      },
      error => {
        this.errorService.error(error);
        this.router.navigate(['login']);
      }
    );
  }
}
