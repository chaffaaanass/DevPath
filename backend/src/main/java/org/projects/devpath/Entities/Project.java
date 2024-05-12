package org.projects.devpath.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;

import java.util.Date;
@Data
@Entity
public class Project {
    @Id
    @GeneratedValue
    private long id;
    private String name;
    private String description;
    private Date deadline;
    @ManyToOne
    @JsonBackReference
    private Module module;
}
