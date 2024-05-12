import { Component, OnInit } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentService } from '../../../services/assignment/assignment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.css'
})
export class AssignmentComponent implements OnInit {
  assignments: Assignment[] = [];
  assignmentId!: number;
  assignment!: Assignment;
  
  constructor(
    private assignmentService: AssignmentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllAssignments();
  }

  getAllAssignments(): void {
    this.assignmentService.getAllAssignments()
      .subscribe(assignments => this.assignments = assignments);
  }
  createAssignment(): void {
    this.router.navigateByUrl(`/assignment/create`);
  }
  updateAssignment(assignmentId: number): void {
    this.router.navigateByUrl(`/assignment/${assignmentId}/update`);
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

  deleteAssignment(id: number): void {
    this.assignmentService.deleteAssignmentById(id)
      .subscribe({
        next: deleteAssignment => {
          console.log('Assignment deleted successfully', deleteAssignment);
          window.location.reload();
        },
        error: error => {
          console.error('Error deleting assignment:', error);
        }
      });
  }
}
