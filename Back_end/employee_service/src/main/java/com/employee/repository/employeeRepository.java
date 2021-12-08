package com.employee.repository;

import com.employee.model.employee;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface employeeRepository extends MongoRepository<employee,Integer> {
}
