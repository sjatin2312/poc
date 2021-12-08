package com.customer.resource;


import com.customer.model.customer;
import com.customer.repository.customerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/customer")
public class customerController {


//    private RestTemplate restTemplate;
//
//    @GetMapping("/findAllcustomer/{id}")
//    public String test()
//    {
//        return restTemplate.getForObject("http://localhost:8082/bills/customer",String.class);
//    }



    @Autowired
    private customerRepository repository;
    @GetMapping("/hello")
    public String hello()
    {
        return "customer";
    }

    @PostMapping("/addcustomer")
    public String savecustomer(@RequestBody customer customer)
    {
       repository.save(customer);
       return "customer added with id : " + customer.getId();
    }
    @GetMapping("/findAllcustomer")
     public List<customer> getcustomer()
    {
        return repository.findAll();
 }
    @GetMapping("/findAllcustomer/{id}")
     public Optional<customer> getcustomer(@PathVariable int id)
     {
         return repository.findById(id);
     }
     @DeleteMapping("/delete/{id}")
    public String deletecustomer(@PathVariable int id)
    {
        repository.deleteById(id);
        return "customer deleted with id " + id;
    }

}
