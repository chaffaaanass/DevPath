import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Technology } from '../technology.model';
import { TechnologyService } from '../../../services/technology/technology.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-technology',
  templateUrl: './update-technology.component.html',
  styleUrl: './update-technology.component.css'
})
export class UpdateTechnologyComponent implements OnInit{
  technologyId!: number;
  technology!: Technology;

  constructor(
    private route: ActivatedRoute,
    private technologyService: TechnologyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const technologyId = params['id'];
      this.getTechnology(technologyId);
    });
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

  updateTechnology(id: number): void {
    this.technologyService.updateTechnology(id, this.technology)
      .subscribe({
        next: updatedTechnology => {
          console.log('Technology updated successfully', updatedTechnology);
          this.router.navigateByUrl('/technologies');
        },
        error: error => {
          console.error('Error updating technology:', error);
        }
      });
  }
}
