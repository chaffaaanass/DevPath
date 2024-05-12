import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../services/course/course.service';
import { Course } from '../course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrl: './update-course.component.css'
})
export class UpdateCourseComponent implements OnInit{
  courseId!: number;
  course!: Course;

  constructor(
    private route: ActivatedRoute, 
    private courseService: CourseService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const courseId = params['id'];
      this.getCourse(courseId); 
    });
  }

  getCourse(id: number): void {
    this.courseService.getCourseById(id).subscribe({
      next: course => {
        this.course = course;
      },
      error: error => {
        console.error('Error fetching course:', error);
      }
    });
  }

  updateCourse(id: number): void {
    this.courseService.updateCourse(id, this.course)
      .subscribe({
        next: updatedCourse => {
          console.log('Course updated successfully', updatedCourse);
          this.router.navigateByUrl('/courses');
        },
        error: error => {
          console.error('Error updating course:', error);
        }
      });
  }

  
}
