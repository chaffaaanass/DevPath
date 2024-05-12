package org.projects.devpath.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
public class Resource {
    @Id
    @GeneratedValue
    private long id;
    private String title;
    private String type;
    private String link;
    @ManyToOne
    @JsonBackReference
    private Module module;
}