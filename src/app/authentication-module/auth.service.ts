import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {AuthState} from './reducers';
import {login as LoginAction} from './reducers/authentication.actions';
import {logout as LogoutAction} from './reducers/authentication.actions';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = localStorage.key(0) || '';
  isAuthenticatedUser: Observable<boolean>;

  constructor(private http: HttpClient, private router: Router, private store: Store<AuthState>) {
    this.isAuthenticatedUser = store.pipe(select('isAuthenticated'));
  }

  login(login: string, password: string): void {
    this.http.post('http://localhost:3004/auth/login', {
        login,
        password
      }).subscribe((response: any) => {
      this.store.dispatch(LoginAction(response.token));
      this.token = response.token;
      localStorage.setItem(this.token, null);
      this.router.navigate(['/course-list']);
    });
  }

  logout(): void {
    localStorage.clear();
    this.store.dispatch(LogoutAction());
    this.token = '';
  }

  getUserInfo() {
    return this.http.post('http://localhost:3004/auth/userinfo', {
      token: this.token
    });
  }

  getToken(): string {
    return this.token;
  }

  isAuthenticated(): Observable<boolean> {
    // return !!this.token;
    return this.isAuthenticatedUser;
  }
}
