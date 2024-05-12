package org.projects.devpath.RestControllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin("http://localhost:4200/")
@RequestMapping("/api/accessDenied")
public class SecurityController {
    @GetMapping
    public ResponseEntity<String> accessDeniedMessage() {
        String message = "Access Denied! You do not have permission to access this resource.";
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(message);
    }
}
