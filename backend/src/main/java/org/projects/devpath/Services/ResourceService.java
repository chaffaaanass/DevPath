package org.projects.devpath.Services;

import org.projects.devpath.Entities.Project;
import org.projects.devpath.Entities.Resource;
import org.projects.devpath.Repositories.ProjectRepository;
import org.projects.devpath.Repositories.ResourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class ResourceService {
    private final ResourceRepository resourceRepository;
    @Autowired
    public ResourceService(ResourceRepository resourceRepository){
        this.resourceRepository = resourceRepository;
    }
    public List<Resource> getAllResources(){
        return resourceRepository.findAll();
    }
    public Resource getResourceById(Long id){
        return resourceRepository.findById(id).get();
    }
    public Resource createResource(Resource resource){
        return resourceRepository.save(resource);
    }
    public Resource updateResource(Resource resource){
        return resourceRepository.save(resource);
    }
    public void deleteResourceById(Long id){
        resourceRepository.deleteById(id);
    }
}
