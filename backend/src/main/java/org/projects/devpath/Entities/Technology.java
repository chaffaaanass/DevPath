package org.projects.devpath.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class Technology {
    @Id
    @GeneratedValue
    private long id;
    private String name;
    private String description;
    @ManyToMany
    @JoinTable(name = "MODULES_TECHNOLOGIES")
    @JsonBackReference
    private List<Module> modules = new ArrayList<>();
}
