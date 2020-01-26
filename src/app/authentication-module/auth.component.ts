import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  password: string;
  userName: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(): void {
    this.authService.login(this.userName, this.password);
  }
}
