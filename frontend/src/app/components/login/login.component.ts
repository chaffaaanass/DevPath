import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth-service';
import { LoginDto } from './login-Dto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginDto: LoginDto = { username: '', password: '' };
  accessToken: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.accessToken = this.authService.getAccessToken();
    console.log('Access Token:',this.accessToken)
  }
  
  login() {
    this.authService.login(this.loginDto).subscribe({
      next: (response) => {
        console.log('Login successful');
        console.log('Access Token:', response.accessToken);
        localStorage.setItem('accessToken', response.accessToken);
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });

      },
      error: (error) => {
        console.error('Login error:', error);
      }
    });
  }

  
}

