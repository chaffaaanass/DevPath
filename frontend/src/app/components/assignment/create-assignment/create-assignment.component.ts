import { Component } from '@angular/core';
import { Assignment } from '../assignment.model';
import { Module } from '../../module/module.model';
import { AssignmentService } from '../../../services/assignment/assignment.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-assignment',
  templateUrl: './create-assignment.component.html',
  styleUrl: './create-assignment.component.css',
})

export class CreateAssignmentComponent {
  newAssignment: Assignment = {
    id: 0,
    title: '',
    description: '',
    deadline: new Date(),
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
    private assignmentService: AssignmentService,
    private router: Router
  ) {}

  createAssignment(): void {
    this.assignmentService.createAssignment(this.newAssignment).subscribe({
      next: (createAssignment) => {
        console.log('Assignment created:', createAssignment);
        this.router.navigateByUrl('/assignments');
      },
      error: (error) => {
        console.error('Error creating assignment:', error);
      },
    });
  }
}
