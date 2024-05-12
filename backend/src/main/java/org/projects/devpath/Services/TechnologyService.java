package org.projects.devpath.Services;

import org.projects.devpath.Entities.Technology;
import org.projects.devpath.Repositories.TechnologyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TechnologyService {
    private final TechnologyRepository technologyRepository;
    @Autowired
    public TechnologyService(TechnologyRepository technologyRepository){
        this.technologyRepository = technologyRepository;
    }
    public List<Technology> getAllTechnologies(){
        return technologyRepository.findAll();
    }
    public Technology getTechnologyById(Long id){
        return technologyRepository.findById(id).get();
    }
    public Technology createTechnology(Technology technology){
        return technologyRepository.save(technology);
    }
    public Technology updateTechnology(Technology technology){
        return technologyRepository.save(technology);
    }
    public void deleteTechnologyById(Long id){
        technologyRepository.deleteById(id);
    }
}
