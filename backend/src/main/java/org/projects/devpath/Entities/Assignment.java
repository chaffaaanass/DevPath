package org.projects.devpath.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data
@Entity
public class Assignment {
    @Id
    @GeneratedValue
    private long id;
    private String title;
    private String description;
    private Date deadline;
    @ManyToOne
    @JsonBackReference
    private Module module;
}
