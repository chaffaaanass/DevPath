import { Injectable } from '@angular/core';
import { Course } from '../../components/course/course.model';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  private apiUrl = 'http://localhost:8080/api/courses'; 
  
  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/all`);
  }
  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/course/${id}`);
  }
  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.apiUrl}/create`, course);
  }
  updateCourse(id: number, course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${id}`, course);
  }
  deleteCourseById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
  enrollInCourse(courseId: number, accessToken: string): Observable<Object> {
    const url = `${this.apiUrl}/${courseId}/enroll`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    });
    const fullUrl = `${url}?token=${accessToken}`;

    return this.http.post(fullUrl, {}, { headers });
  }
}
