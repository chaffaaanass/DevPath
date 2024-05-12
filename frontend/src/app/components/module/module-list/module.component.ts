import { Component, OnInit } from '@angular/core';
import { Module } from '../module.model';
import { ModuleService } from '../../../services/module/module.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth-service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrl: './module.component.css'
})
export class ModuleComponent implements OnInit{
  modules: Module[] = [];
  moduleId!: number;
  module!: Module;
  accessToken: string | null;

  constructor(
    private moduleService: ModuleService,
    private router: Router,
    private authService: AuthService
  ) {
    this.accessToken = this.authService.getAccessToken();

   }

  ngOnInit(): void {
    this.getAllModules();
    this.accessToken = this.authService.getAccessToken();
    console.log('Access Token:',this.accessToken)
  }

  getAllModules(): void {
    this.moduleService.getAllModules()
      .subscribe(modules => this.modules = modules);

  }
  createModule(): void {
    this.router.navigateByUrl(`/module/create`);
  }
  updateModule(moduleId: number): void {
    this.router.navigateByUrl(`/module/${moduleId}/update`);
  }
  getModule(id: number): void {
    this.moduleService.getModuleById(id).subscribe({
      next: module => {
        this.module = module;
      },
      error: error => {
        console.error('Error fetching module:', error);
      }
    });
  }

  deleteModule(id: number): void {
    this.moduleService.deleteModuleById(id)
      .subscribe({
        next: deleteModule => {
          console.log('Module deleted successfully', deleteModule);
          window.location.reload();
        },
        error: error => {
          console.error('Error deleting module:', error);
        }
      });
  }
}
