import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth-service';
import { RegisterDto } from './register-Dto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent   {
  registerDto: RegisterDto = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    this.authService.register(this.registerDto).subscribe({
      next: (response) => {
        console.log('Registration response:', response);
        this.router.navigate(['']);
      },
      error: (error) => {
        console.error('Registration error:', error);
      }
    });
  }
}
