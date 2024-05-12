import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../project.model';
import { ProjectService } from '../../../services/project/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrl: './update-project.component.css'
})
export class UpdateProjectComponent {
  projectId!: number;
  project!: Project;

  constructor(
    private route: ActivatedRoute, 
    private projectService: ProjectService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const projectId = params['id'];
      this.getProject(projectId); 
    });
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

  updateProject(id: number): void {
    this.projectService.updateProject(id, this.project)
      .subscribe({
        next: updatedProject => {
          console.log('Project updated successfully', updatedProject);
          this.router.navigateByUrl('/projects');
        },
        error: error => {
          console.error('Error updating project:', error);
        }
      });
  }
}
