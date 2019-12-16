import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  password: string;
  userName: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    if (!this.userName || !this.password) {
      return;
    }
    this.authService.login(this.userName, this.password);
  }
}
