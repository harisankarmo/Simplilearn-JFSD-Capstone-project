import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-movie-tckt-booking';

  isAdminRoute: boolean = false;
  isLoggedIn: boolean = false;
  userName: string | null = '';
  userType: string | null = '';

  constructor(private router: Router) {
    // Subscribe to navigation events
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateAppState(); // Update state after navigation ends
      }
    });
  }

  // Method to check and update the login state
  private updateAppState(): void {
    this.userName = localStorage.getItem('userName');
    this.userType = localStorage.getItem('userType');

    // Determine logged-in state
    this.isLoggedIn = !!this.userName; // Convert to boolean: true if userName exists

    // Check if the current route is an admin route
    this.isAdminRoute = this.router.url.startsWith('/admin');

    console.log(
      `Username: ${this.userName}, UserType: ${this.userType}, Logged In: ${this.isLoggedIn}, Admin Route: ${this.isAdminRoute}`
    );
  }

  // Logout method
  logOut(): void {
    console.log('Logging out...');
    localStorage.removeItem('userName');
    localStorage.removeItem('userType');
    this.isLoggedIn = false;
    this.router.navigate(['/login']).then(() => this.updateAppState()); // Update state after navigation
  }
}
