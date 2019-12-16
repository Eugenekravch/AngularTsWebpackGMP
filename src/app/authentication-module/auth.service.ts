import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = '';

  constructor(private http: HttpClient, private router: Router) { }

  login(login: string, password: string): void {
    this.http.post('http://localhost:3004/auth/login', {
        login,
        password
      }).subscribe((response: any) => {
      this.token = response.token;
      this.router.navigate(['/course-list']);
    });
  }

  logout(): void {
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

  isAuthenticated(): boolean {
    return !!this.token;
  }
}
