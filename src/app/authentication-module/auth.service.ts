import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = localStorage.key(0) || '';

  constructor(private http: HttpClient, private router: Router) { }

  login(login: string, password: string): void {
    this.http.post('http://localhost:3004/auth/login', {
        login,
        password
      }).subscribe((response: any) => {
      this.token = response.token;
      localStorage.setItem(this.token, null);
      this.router.navigate(['/course-list']);
    });
  }

  logout(): void {
    localStorage.clear();
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
