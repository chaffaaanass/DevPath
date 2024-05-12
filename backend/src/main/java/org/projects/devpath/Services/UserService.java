package org.projects.devpath.Services;

import org.projects.devpath.Entities.Course;
import org.projects.devpath.Entities.Role;
import org.projects.devpath.Entities.User;
import org.projects.devpath.Repositories.CourseRepository;
import org.projects.devpath.Repositories.RoleRepository;
import org.projects.devpath.Repositories.UserRepository;
import org.projects.devpath.Security.JwtGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private JwtGenerator jwtGenerator;
    private CourseRepository courseRepository;

    @Autowired
    public UserService(UserRepository userRepository, RoleRepository roleRepository, JwtGenerator jwtGenerator, CourseRepository courseRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.jwtGenerator = jwtGenerator;
        this.courseRepository = courseRepository;
    }

    public void enrollInCourse(Long courseId, String token) {
        String username = jwtGenerator.getUsernameFromJWT(token);

        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found with username: " + username));

        Role studentRole = roleRepository.findByName("STUDENT")
                .orElseThrow(() -> new RuntimeException("Role not found: STUDENT"));

        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found with ID: " + courseId));

        List<Course> enrolledCourses = user.getCourses();
        enrolledCourses.add(course);
        user.setCourses(enrolledCourses);
        user.getRoles().clear();
        user.getRoles().add(studentRole);

        List<User> enrolledUsers = course.getUsers();
        enrolledUsers.add(user);
        course.setUsers(enrolledUsers);

        courseRepository.save(course);
        userRepository.save(user);
    }

}
