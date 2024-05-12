import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resource } from '../resource.model';
import { ResourceService } from '../../../services/resource/resource.service';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrl: './resource-details.component.css'
})
export class ResourceDetailsComponent {
  resource?: Resource; 

  constructor(
    private route: ActivatedRoute,
    private resourceService: ResourceService 
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const resourceId = params['id'];
      this.getResource(resourceId);
    });
  }

  getResource(id: number): void {
    this.resourceService.getResourceById(id).subscribe({ 
      next: (resource) => {
        this.resource = resource;
      },
      error: (error) => {
        console.error('Error fetching resource:', error);
      }
    });
  }
}
