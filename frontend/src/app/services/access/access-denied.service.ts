import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessDeniedService {

  private apiUrl = 'http://localhost:8080/api/accessdenied'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getAccessDeniedMessage(): Observable<string> {
    return this.http.get<string>(this.apiUrl);
  }
}
