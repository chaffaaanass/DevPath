import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../project.model';
import { ProjectService } from '../../../services/project/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent {
  project?: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const projectId = params['id'];
      this.getProject(projectId);
    });
  }

  getProject(id: number): void {
    this.projectService.getProjectById(id).subscribe({
      next: (project) => {
        this.project = project;
      },
      error: (error) => {
        console.error('Error fetching project:', error);
      }
    });
  }
}
