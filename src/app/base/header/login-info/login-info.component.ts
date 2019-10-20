import { Component, OnInit } from '@angular/core';
import {UserInfo} from '../../user-info.interface';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.scss']
})
export class LoginInfoComponent implements OnInit {
  userInfo: UserInfo = {
    id: 1,
    firstName: 'John',
    lastName: 'Newman'
  };

  constructor() { }

  ngOnInit() {
  }

}
