package org.projects.devpath.Services;

import org.projects.devpath.Entities.Course;
import org.projects.devpath.Repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CourseService {
    private final CourseRepository courseRepository;
    @Autowired
    public CourseService(CourseRepository courseRepository){
        this.courseRepository = courseRepository;
    }
    public List<Course> getAllCourses(){
        return courseRepository.findAll();
    }
    public Course getCourseById(Long id){
        return courseRepository.findById(id).get();
    }
    public Course createCourse(Course course){
        return courseRepository.save(course);
    }
    public Course updateCourse(Course course){
        return courseRepository.save(course);
    }
    public void deleteCourseById(Long id){
        courseRepository.deleteById(id);
    }
}
