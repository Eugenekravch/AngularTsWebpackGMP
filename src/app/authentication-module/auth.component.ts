import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  // @Output() loginEvent = new EventEmitter<object>();
  password: string;
  userName: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  // login(): void {
  //   this.loginEvent.emit({name: this.userName, password: this.password});
  // }
  login(): void {
    this.authService.login(this.userName, this.password);
    console.log(this.authService.isAuthenticated());
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/course-list']);
    }
  }
}
