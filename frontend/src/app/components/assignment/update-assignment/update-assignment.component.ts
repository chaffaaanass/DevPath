import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignmentService } from '../../../services/assignment/assignment.service';
import { Assignment } from '../assignment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-assignment',
  templateUrl: './update-assignment.component.html',
  styleUrl: './update-assignment.component.css'
})
export class UpdateAssignmentComponent {
  assignmentId!: number;
  assignment!: Assignment;

  constructor(
    private route: ActivatedRoute, 
    private assignmentService: AssignmentService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const assignmentId = params['id'];
      this.getAssignment(assignmentId); 
    });
  }

  getAssignment(id: number): void {
    this.assignmentService.getAssignmentById(id).subscribe({
      next: assignment => {
        this.assignment = assignment;
      },
      error: error => {
        console.error('Error fetching assignment:', error);
      }
    });
  }

  updateAssignment(id: number): void {
    this.assignmentService.updateAssignment(id, this.assignment)
      .subscribe({
        next: updatedAssignment => {
          console.log('Assignment updated successfully', updatedAssignment);
          this.router.navigateByUrl('/assignments');
        },
        error: error => {
          console.error('Error updating assignment:', error);
        }
      });
  }
}
