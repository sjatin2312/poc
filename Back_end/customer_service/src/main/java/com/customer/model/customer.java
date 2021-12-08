package com.customer.model;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ToString

@Document(collection = "customer")
public class customer {
@Id
    private int id;
    private String name;
    private String email;
    private int adults;
    private int childs;
    private String mobile;
    private int days;

//    List<bills> bills=new ArrayList<>();
}
