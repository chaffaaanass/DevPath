import { Component } from '@angular/core';
import { Module } from '../module.model';
import { ModuleService } from '../../../services/module/module.service';
import { Router } from '@angular/router';
import { Course } from '../../course/course.model';

@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrl: './create-module.component.css',
})
export class CreateModuleComponent {
  newModule: Module = { 
    id: 0,
    title: '',
    description: '',
    course: new Course(0,'','',[]),
    assignments: [],
    resources: [],
    projects: [],
    technologies: [],
   };

  constructor(private moduleService: ModuleService, private router: Router) {}

  createModule(): void {
    this.moduleService.createModule(this.newModule).subscribe({
      next: (createdModule) => {
        console.log('Module created:', createdModule);
        this.router.navigateByUrl('/modules');
      },
      error: (error) => {
        console.error('Error creating module:', error);
      },
    });
  }
}
