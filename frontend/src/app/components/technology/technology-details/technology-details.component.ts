import { Component } from '@angular/core';
import { Technology } from '../technology.model';
import { TechnologyService } from '../../../services/technology/technology.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-technology-details',
  templateUrl: './technology-details.component.html',
  styleUrl: './technology-details.component.css'
})
export class TechnologyDetailsComponent {
  technology?: Technology;

  constructor(
    private route: ActivatedRoute,
    private technologyService: TechnologyService // Use TechnologyService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const technologyId = params['id'];
      this.getTechnology(technologyId); // Change method name
    });
  }

  getTechnology(id: number): void { // Change method name and parameter type
    this.technologyService.getTechnologyById(id).subscribe({
      next: (technology) => {
        this.technology = technology;
      },
      error: (error) => {
        console.error('Error fetching technology:', error);
      }
    });
  }
}
