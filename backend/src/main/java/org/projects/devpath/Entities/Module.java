package org.projects.devpath.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;
@Data
@Entity
public class Module {
    @Id
    @GeneratedValue
    private long id;
    private String title;
    private String description;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_id")
    @JsonBackReference
    private Course course;
    @OneToMany(mappedBy = "module", fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<Assignment> assignments = new ArrayList<>();
    @OneToMany(mappedBy = "module", fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<Resource> resources = new ArrayList<>();
    @OneToMany(mappedBy = "module", fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<Project> projects = new ArrayList<>();
    @ManyToMany(mappedBy = "modules", fetch = FetchType.EAGER)
    @JsonManagedReference
    private List<Technology> technologies = new ArrayList<>();
}
