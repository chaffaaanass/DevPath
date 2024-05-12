import { Component } from '@angular/core';
import { Project } from '../project.model';
import { Module } from '../../module/module.model';
import { ProjectService } from '../../../services/project/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.css'
})
export class CreateProjectComponent {
  newProject: Project = {
    id: 0,
    name: '',
    description: '',
    deadline: new Date(),
    module: new Module(0,
      '',
      '',
      { id: 0, title: '', description: '', modules: [] },
      [],
      [],
      [],
      []),
  };

  constructor(private projectService: ProjectService, private router: Router) {}

  createProject(): void {
    this.projectService.createProject(this.newProject).subscribe({
      next: (createProject) => {
        console.log('Project created:', createProject);
        this.router.navigateByUrl('/projects');
      },
      error: (error) => {
        console.error('Error creating project:', error);
      },
    });
  }
}
