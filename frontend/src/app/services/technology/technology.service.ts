import { Injectable } from '@angular/core';
import { Technology } from '../../components/technology/technology.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  private apiUrl = 'http://localhost:8080/api/technologies'; 
  
  constructor(private http: HttpClient) { }

  getAllTechnologies(): Observable<Technology[]> {
    return this.http.get<Technology[]>(`${this.apiUrl}`);
  }
  getTechnologyById(id: number): Observable<Technology> {
    return this.http.get<Technology>(`${this.apiUrl}/${id}`);
  }
  createTechnology(technology: Technology): Observable<Technology> {
    return this.http.post<Technology>(`${this.apiUrl}`, technology);
  }
  updateTechnology(id: number, technology: Technology): Observable<Technology> {
    return this.http.put<Technology>(`${this.apiUrl}/${id}`, technology);
  }
  deleteTechnologyById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
