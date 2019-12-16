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
      this.authService.getUserInfo().subscribe((userInfo: any) => {
        this.userInfo.userName = userInfo.login;
      });
    }
  }

  logOut(): void {
    this.logoutEvent.emit();
  }

}
