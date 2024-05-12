import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponseDto } from './auth-dto.model';
import { LoginDto } from '../../components/login/login-Dto.model';
import { RegisterDto } from '../../components/register/register/register-Dto.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient, private router: Router) {}

  login(loginDto: LoginDto): Observable<AuthResponseDto> {
    return this.http.post<AuthResponseDto>(`${this.apiUrl}/login`, loginDto);
  }

  register(registerDto: RegisterDto): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/register`, registerDto);
  }
  logout(): void {
    localStorage.removeItem('accessToken');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('accessToken');
  }
  getAccessToken(): string {
    return localStorage.getItem('accessToken')!;
  }
}
