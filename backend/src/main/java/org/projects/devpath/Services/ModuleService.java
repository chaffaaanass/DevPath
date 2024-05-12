package org.projects.devpath.Services;

import org.projects.devpath.Entities.Module;
import org.projects.devpath.Repositories.ModuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ModuleService {
    private final ModuleRepository moduleRepository;
    @Autowired
    public ModuleService(ModuleRepository moduleRepository){
        this.moduleRepository = moduleRepository;
    }
    public List<Module> getAllModules(){
        return moduleRepository.findAll();
    }
    public Module getModuleById(Long id){
        return moduleRepository.findById(id).get();
    }
    public Module createModule(Module module){
        return moduleRepository.save(module);
    }
    public Module updateModule(Module module){
        return moduleRepository.save(module);
    }
    public void deleteModuleById(Long id){
        moduleRepository.deleteById(id);
    }
}
