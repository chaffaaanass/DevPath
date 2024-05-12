package org.projects.devpath.RestControllers;

import org.projects.devpath.Entities.Technology;
import org.projects.devpath.Services.TechnologyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200/")
@RequestMapping("/api/technologies")
public class TechnologyController {
    private final TechnologyService technologyService;

    @Autowired
    public TechnologyController(TechnologyService technologyService) {
        this.technologyService = technologyService;
    }
    @GetMapping
    public ResponseEntity<List<Technology>> getAllTechnologys() {
        List<Technology> technologies = technologyService.getAllTechnologies();
        return ResponseEntity.ok(technologies);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Technology> getTechnologyById(@PathVariable Long id) {
        Technology technology = technologyService.getTechnologyById(id);
        if (technology != null) {
            return ResponseEntity.ok(technology);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Technology> createTechnology(@RequestBody Technology technology) {
        Technology createdTechnology = technologyService.createTechnology(technology);
        return new ResponseEntity<>(createdTechnology, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Technology> updateTechnology(@PathVariable Long id, @RequestBody Technology technology) {
        Technology existingTechnology = technologyService.getTechnologyById(id);
        if (existingTechnology != null) {
            technology.setId(id);
            Technology updatedTechnology = technologyService.updateTechnology(technology);
            return ResponseEntity.ok(updatedTechnology);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTechnologyById(@PathVariable Long id) {
        Technology existingTechnology = technologyService.getTechnologyById(id);
        if (existingTechnology != null) {
            technologyService.deleteTechnologyById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
