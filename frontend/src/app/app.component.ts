import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  logout() {
    console.log('Access Token:', this.authService.getAccessToken());

    this.authService.logout();

    console.log('Access Token:', this.authService.getAccessToken());
  }
}
