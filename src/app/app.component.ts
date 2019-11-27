import {Component, OnInit} from '@angular/core';
import {AuthService} from './authentication-module/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularProject';
  isAuthenticated: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  login({name, password}) {
    this.authService.login(name, password);
    this.isAuthenticated = this.authService.isAuthenticated();
    console.log(this.authService.isAuthenticated());
  }

  logOut() {
    this.authService.logout();
    this.isAuthenticated = this.authService.isAuthenticated();
    console.log(this.authService.isAuthenticated());
  }
}
