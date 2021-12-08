package com.rooms.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString

@Document( collection = "rooms")
public class rooms {

    @Id
    private int id;
    private String ava;
    private String clean;
    private String beds;
    private String type;
    private int price;
}
