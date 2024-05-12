import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resource } from '../resource.model';
import { ResourceService } from '../../../services/resource/resource.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-resource',
  templateUrl: './update-resource.component.html',
  styleUrl: './update-resource.component.css'
})
export class UpdateResourceComponent {
  resourceId!: number;
  resource!: Resource; 

  constructor(
    private route: ActivatedRoute,
    private resourceService: ResourceService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const resourceId = params['id'];
      this.getResource(resourceId); 
    });
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

  updateResource(id: number): void { 
    this.resourceService.updateResource(id, this.resource)
      .subscribe({
        next: updatedResource => {
          console.log('Resource updated successfully', updatedResource);
          this.router.navigateByUrl('/resources'); 
        },
        error: error => {
          console.error('Error updating resource:', error);
        }
      });
  }
}
