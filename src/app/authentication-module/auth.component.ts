import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @Output() loginEvent = new EventEmitter<object>();
  password: string;
  userName: string;

  constructor() { }

  ngOnInit() {
  }

  login(): void {
    this.loginEvent.emit({name: this.userName, password: this.password});
  }
}
