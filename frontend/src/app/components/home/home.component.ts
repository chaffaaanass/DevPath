import { Component, OnInit } from '@angular/core';
import { Course } from '../course/course.model';
import { CourseService } from '../../services/course/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  courses: Course[] = [];
  constructor(
    private courseService: CourseService,
  ) { }

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses(): void {
    this.courseService.getAllCourses()
      .subscribe(courses => this.courses = courses);
  }
}
