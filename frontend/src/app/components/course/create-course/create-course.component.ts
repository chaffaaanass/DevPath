import { Component } from '@angular/core';
import { Course } from '../course.model';
import { CourseService } from '../../../services/course/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.css'
})
export class CreateCourseComponent {
  newCourse: Course = { id: 0, title: '', description: '', modules: []}; 

  constructor(
    private courseService: CourseService, 
    private router: Router
  ) { }

  createCourse(): void {
    this.courseService.createCourse(this.newCourse)
      .subscribe({
        next: (createdCourse) => {
          console.log('Course created:', createdCourse);
          this.router.navigateByUrl('/courses');
        },
        error: (error) => {
          console.error('Error creating course:', error);
        }
      });
  }
  
}
