import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}
  isAuthenticated: boolean = false;

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  logout() {
    console.log('Access Token:', this.authService.getAccessToken());

    this.authService.logout();

    console.log('Access Token:', this.authService.getAccessToken());
  }
}
