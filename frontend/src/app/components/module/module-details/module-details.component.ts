import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Module } from '../module.model';
import { ModuleService } from '../../../services/module/module.service';

@Component({
  selector: 'app-module-details',
  templateUrl: './module-details.component.html',
  styleUrl: './module-details.component.css'
})
export class ModuleDetailsComponent {
  module?: Module;

  constructor(
    private route: ActivatedRoute,
    private moduleService: ModuleService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const moduleId = params['id'];
      this.getModule(moduleId);
    });
  }

  getModule(id: number): void {
    this.moduleService.getModuleById(id).subscribe({
      next: (module) => {
        this.module = module;
      },
      error: (error) => {
        console.error('Error fetching module:', error);
      }
    });
  }
}
