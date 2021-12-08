package com.employee.resource;


import com.employee.model.employee;
import com.employee.repository.employeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/employee")
public class employeeController {

    @Autowired
    private employeeRepository repository;

    @GetMapping("/hello")
    public String hello()
    {
        return "employee";
    }

    @PostMapping("/addemployee")
    public String saveemployee(@RequestBody employee employee )
    {
        repository.save(employee);
        return "Employee added with Id : "+ employee.getId();
    }
    @GetMapping("/findAllemployee")
    public List<employee> getemployee()
    {
        return repository.findAll();
    }
    @GetMapping("/findAllemployee/{id}")
    public Optional<employee> getemployee(@PathVariable int id)
    {
        return repository.findById(id);
    }
    @DeleteMapping("/delete/{id}")
    public List<employee> deleteemployee(@PathVariable int id)
    {
        repository.deleteById(id);
        return repository.findAll();
    }
}


