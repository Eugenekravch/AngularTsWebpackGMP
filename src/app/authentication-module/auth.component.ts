import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @Output() loginEvent = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }

  login(name, password): void {
    this.loginEvent.emit({name, password});
  }
}
