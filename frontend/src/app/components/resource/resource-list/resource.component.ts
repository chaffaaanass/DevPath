import { Component, OnInit } from '@angular/core';
import { Resource } from '../resource.model';
import { ResourceService } from '../../../services/resource/resource.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrl: './resource.component.css'
})
export class ResourceComponent {
  resources: Resource[] = []; 
  resourceId!: number;
  resource!: Resource; 

  constructor(
    private resourceService: ResourceService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllResources(); 
  }

  getAllResources(): void { 
    this.resourceService.getAllResources() 
      .subscribe(resources => this.resources = resources);
  }

  createResource(): void { 
    this.router.navigateByUrl(`/resource/create`); 
  }

  updateResource(resourceId: number): void { 
    this.router.navigateByUrl(`/resource/${resourceId}/update`); 
  }

  getResource(id: number): void { 
    this.resourceService.getResourceById(id).subscribe({
      next: resource => {
        this.resource = resource;
      },
      error: error => {
        console.error('Error fetching resource:', error);
      }
    });
  }

  deleteResource(id: number): void { 
    this.resourceService.deleteResourceById(id)
      .subscribe({
        next: deleteResource => {
          console.log('Resource deleted successfully', deleteResource);
          window.location.reload();
        },
        error: error => {
          console.error('Error deleting resource:', error);
        }
      });
  }
}
