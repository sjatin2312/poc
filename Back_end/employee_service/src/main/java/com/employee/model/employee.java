package com.employee.model;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;




@Getter
@Setter
@ToString
@Document(collection = "employee")
public class employee {
    @Id
    private int id;
    private String name;
    private String email;
    private int age;
    private String gender;
    private String job_role;
    private int salary;
    private String phone_no;


}
