import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { CourseService } from '../../../services/course/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit {
  courses: Course[] = [];
  courseId!: number;
  course!: Course;

  constructor(
    private courseService: CourseService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses(): void {
    this.courseService.getAllCourses()
      .subscribe(courses => this.courses = courses);
  }
  createCourse(): void {
    this.router.navigateByUrl(`/course/create`);
  }
  updateCourse(courseId: number): void {
    this.router.navigateByUrl(`/course/${courseId}/update`);
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

  deleteCourse(id: number): void {
    this.courseService.deleteCourseById(id)
      .subscribe({
        next: deleteCourse => {
          console.log('Course deleted successfully', deleteCourse);
          window.location.reload();
        },
        error: error => {
          console.error('Error deleting course:', error);
        }
      });
  }
}
