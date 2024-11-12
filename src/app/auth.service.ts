import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  loginUser(email: string, password: string): boolean {
    const users = this.getUsers();
    const user = users.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password.toLowerCase() === password.toLowerCase()
    );

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      return true; // Login successful
    }

    return false; // Invalid credentials
  }

  // Log out the user
  logout(): void {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['']);
  }

  // Get users from local storage
  private getUsers(): any[] {
    return JSON.parse(localStorage.getItem('storeUsers') || '[]');
  }

   // Check if the user is logged in
   get isLoggedIn():boolean {
    let user = localStorage.getItem('loggedInUser');

    if (user) {
      return true
    } 
      return false
  }
}
