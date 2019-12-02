import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserInfo} from '../../user-info.interface';
import {AuthService} from '../../../authentication-module/auth.service';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.scss']
})
export class LoginInfoComponent implements OnInit {
  @Output() logoutEvent = new EventEmitter<any>();

  userInfo: UserInfo = {
    userName: ''
  };

  isAuthenticatedUser: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isAuthenticatedUser = this.authService.isAuthenticated();
    if (this.isAuthenticatedUser) {
      this.userInfo.userName = this.authService.getUserInfo();
    }
  }

  logOut(): void {
    this.logoutEvent.emit();
  }

}
