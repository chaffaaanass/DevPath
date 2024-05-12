import { Component } from '@angular/core';
import { Technology } from '../technology.model';
import { TechnologyService } from '../../../services/technology/technology.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-technology',
  templateUrl: './create-technology.component.html',
  styleUrl: './create-technology.component.css'
})
export class CreateTechnologyComponent {
  newTechnology: Technology = { id: 0, name: '', description: '', modules: []}; 

  constructor(
    private technologyService: TechnologyService, 
    private router: Router
  ) { }

  createTechnology(): void {
    this.technologyService.createTechnology(this.newTechnology)
      .subscribe({
        next: (createdTechnology) => {
          console.log('Technology created:', createdTechnology);
          this.router.navigateByUrl('/technologies'); 
        },
        error: (error) => {
          console.error('Error creating technology:', error);
        }
      });
  }
}
