import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Module } from '../module.model';
import { ModuleService } from '../../../services/module/module.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-module',
  templateUrl: './update-module.component.html',
  styleUrl: './update-module.component.css'
})
export class UpdateModuleComponent {
  moduleId!: number;
  module!: Module;

  constructor(
    private route: ActivatedRoute, 
    private moduleService: ModuleService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const moduleId = params['id'];
      this.getModule(moduleId); 
    });
  }

  getModule(id: number): void {
    this.moduleService.getModuleById(id).subscribe({
      next: module => {
        this.module = module;
      },
      error: error => {
        console.error('Error fetching module:', error);
      }
    });
  }

  updateModule(id: number): void {
    this.moduleService.updateModule(id, this.module)
      .subscribe({
        next: updateModule => {
          console.log('Module updated successfully', updateModule);
          this.router.navigateByUrl('/modules');
        },
        error: error => {
          console.error('Error updating module:', error);
        }
      });
  }
}
