import { Injectable } from '@angular/core';
import { Module } from '../../components/module/module.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  private apiUrl = 'http://localhost:8080/api/modules'; 
  
  constructor(private http: HttpClient) { }

  getAllModules(): Observable<Module[]> {
    return this.http.get<Module[]>(`${this.apiUrl}/all`);
  }
  getModuleById(id: number): Observable<Module> {
    return this.http.get<Module>(`${this.apiUrl}/module/${id}`);
  }
  createModule(module: Module): Observable<Module> {
    return this.http.post<Module>(`${this.apiUrl}`, module);
  }
  updateModule(id: number, module: Module): Observable<Module> {
    return this.http.put<Module>(`${this.apiUrl}/${id}`, module);
  }
  deleteModuleById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
