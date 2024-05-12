package org.projects.devpath.Services;

import org.projects.devpath.Entities.Assignment;
import org.projects.devpath.Repositories.AssignmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AssignmentService {
    private final AssignmentRepository assignmentRepository;
    @Autowired
    public AssignmentService(AssignmentRepository assignmentRepository){
        this.assignmentRepository = assignmentRepository;
    }
    public List<Assignment> getAllAssignments(){
        return assignmentRepository.findAll();
    }
    public Assignment getAssignmentById(Long id){
        return assignmentRepository.findById(id).get();
    }
    public Assignment createAssignment(Assignment assignment){
        return assignmentRepository.save(assignment);
    }
    public Assignment updateAssignment(Assignment assignment){
        return assignmentRepository.save(assignment);
    }
    public void deleteAssignmentById(Long id){
        assignmentRepository.deleteById(id);
    }
    

}
