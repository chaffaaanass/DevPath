import { Injectable } from '@angular/core';
import { Assignment } from '../../components/assignment/assignment.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  private apiUrl = 'http://localhost:8080/api/assignments'; 
  
  constructor(private http: HttpClient) { }

  getAllAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`${this.apiUrl}`);
  }
  getAssignmentById(id: number): Observable<Assignment> {
    return this.http.get<Assignment>(`${this.apiUrl}/${id}`);
  }
  createAssignment(assignment: Assignment): Observable<Assignment> {
    return this.http.post<Assignment>(`${this.apiUrl}`, assignment);
  }
  updateAssignment(id: number, assignment: Assignment): Observable<Assignment> {
    return this.http.put<Assignment>(`${this.apiUrl}/${id}`, assignment);
  }
  deleteAssignmentById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
