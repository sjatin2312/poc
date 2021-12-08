package com.customer.repository;

import com.customer.model.customer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface customerRepository extends MongoRepository<customer, Integer>
{
}
