import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course.model';
import { AuthService } from '../../../services/auth/auth-service';
import { CourseService } from '../../../services/course/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent {
  course?: Course;
  accessToken!: string ;
  courseId!: number;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private authService: AuthService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const courseId = params['id'];
      this.getCourse(courseId);
      
    });
    const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.courseId = +id;
      } else {
        console.log('Id not found!')
      }
    this.accessToken = this.authService.getAccessToken();
    console.log('Access Token : ',this.accessToken)

  }

  getCourse(id: number): void {
    this.courseService.getCourseById(id).subscribe({
      next: (course) => {
        this.course = course;
      },
      error: (error) => {
        console.error('Error fetching course:', error);
      },
    });
  }
  enrollCourse(): void {
    this.courseService.enrollInCourse(this.courseId, this.accessToken)
      .subscribe({
        next: (response) => {
          console.log('Enrollment successful',response);
          this.router.navigate(['/modules']);
        },
        error: (error) => {
          console.error('Enrollment failed:', error);
        }
  });
  }
}
