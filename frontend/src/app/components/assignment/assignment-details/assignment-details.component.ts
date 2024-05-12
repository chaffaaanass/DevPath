import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Assignment } from '../assignment.model';
import { AssignmentService } from '../../../services/assignment/assignment.service';

@Component({
  selector: 'app-assignment-details',
  templateUrl: './assignment-details.component.html',
  styleUrl: './assignment-details.component.css'
})
export class AssignmentDetailsComponent {
  assignment?: Assignment;

  constructor(
    private route: ActivatedRoute,
    private assignmentService: AssignmentService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const assignmentId = params['id'];
      this.getAssignment(assignmentId);
    });
  }

  getAssignment(id: number): void {
    this.assignmentService.getAssignmentById(id).subscribe({
      next: (assignment) => {
        this.assignment = assignment;
      },
      error: (error) => {
        console.error('Error fetching assignment:', error);
      }
    });
  }
}
