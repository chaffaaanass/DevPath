package org.projects.devpath.Entities;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class Course {
    @Id
    @GeneratedValue
    private long id;
    private String title;
    private String description;
    @OneToMany(mappedBy = "course", fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<Module> modules = new ArrayList<>();
    @ManyToMany(mappedBy = "courses", fetch = FetchType.EAGER)
    @JsonManagedReference
    private List<User> users = new ArrayList<>();
}
