import { Component, OnInit } from '@angular/core';
import { Technology } from '../technology.model';
import { TechnologyService } from '../../../services/technology/technology.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css'
})
export class TechnologyComponent implements OnInit {
  technologies: Technology[] = [];
  technologyId!: number;
  technology!: Technology;

  constructor(
    private technologyService: TechnologyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllTechnologies();
  }

  getAllTechnologies(): void {
    this.technologyService.getAllTechnologies()
      .subscribe(technologies => this.technologies = technologies);
  }

  createTechnology(): void {
    this.router.navigateByUrl(`/technology/create`);
  }

  updateTechnology(technologyId: number): void {
    this.router.navigateByUrl(`/technology/${technologyId}/update`);
  }

  getTechnology(id: number): void {
    this.technologyService.getTechnologyById(id).subscribe({
      next: technology => {
        this.technology = technology;
      },
      error: error => {
        console.error('Error fetching technology:', error);
      }
    });
  }

  deleteTechnology(id: number): void {
    this.technologyService.deleteTechnologyById(id)
      .subscribe({
        next: deleteTechnology => {
          console.log('Technology deleted successfully', deleteTechnology);
          window.location.reload();
        },
        error: error => {
          console.error('Error deleting technology:', error);
        }
      });
  }
}
