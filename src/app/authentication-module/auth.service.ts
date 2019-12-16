import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(name: string, password: string): void {
    localStorage.setItem(name, password);
  }

  logout(): void {
    localStorage.clear();
  }

  getUserInfo(): string {
    const key = localStorage.key(0);

    return key;
  }

  isAuthenticated(): boolean {
    return !!this.getUserInfo();
  }
}
