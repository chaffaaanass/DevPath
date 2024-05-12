import { Component } from '@angular/core';
import { Resource } from '../resource.model';
import { Module } from '../../module/module.model';
import { ResourceService } from '../../../services/resource/resource.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-resource',
  templateUrl: './create-resource.component.html',
  styleUrl: './create-resource.component.css'
})
export class CreateResourceComponent {
  newResource: Resource = {
    id: 0,
    title: '',
    description: '',
    type: '',
    link: '',
    module: new Module(
      0,
      '',
      '',
      { id: 0, title: '', description: '', modules: [] },
      [],
      [],
      [],
      []
    ),
  };

  constructor(
    private resourceService: ResourceService,
    private router: Router
  ) {}

  createResource(): void {
    this.resourceService.createResource(this.newResource).subscribe({
      next: (createResource) => {
        console.log('Resource created:', createResource);
        this.router.navigateByUrl('/resources');
      },
      error: (error) => {
        console.error('Error creating resource:', error);
      },
    });
  }
}
