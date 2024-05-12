import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../../../services/project/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [];
  projectId!: number;
  project!: Project;
  constructor(
    private projectService: ProjectService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllProjects();
  }

  getAllProjects(): void {
    this.projectService.getAllProjects()
      .subscribe(projects => this.projects = projects);
  }
  createProject(): void {
    this.router.navigateByUrl(`/project/create`);
  }
  updateProject(projectId: number): void {
    this.router.navigateByUrl(`/project/${projectId}/update`);
  }
  getProject(id: number): void {
    this.projectService.getProjectById(id).subscribe({
      next: project => {
        this.project = project;
      },
      error: error => {
        console.error('Error fetching project:', error);
      }
    });
  }

  deleteProject(id: number): void {
    this.projectService.deleteProjectById(id)
      .subscribe({
        next: deleteProject => {
          console.log('Project deleted successfully', deleteProject);
          window.location.reload();
        },
        error: error => {
          console.error('Error deleting project:', error);
        }
      });
  }
}
