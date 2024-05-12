package org.projects.devpath.Services;

import org.projects.devpath.Entities.Module;
import org.projects.devpath.Entities.Project;
import org.projects.devpath.Repositories.ModuleRepository;
import org.projects.devpath.Repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {
    private final ProjectRepository projectRepository;
    @Autowired
    public ProjectService(ProjectRepository projectRepository){
        this.projectRepository = projectRepository;
    }
    public List<Project> getAllProjects(){
        return projectRepository.findAll();
    }
    public Project getProjectById(Long id){
        return projectRepository.findById(id).get();
    }
    public Project createProject(Project project){
        return projectRepository.save(project);
    }
    public Project updateProject(Project project){
        return projectRepository.save(project);
    }
    public void deleteProjectById(Long id){
        projectRepository.deleteById(id);
    }
}
