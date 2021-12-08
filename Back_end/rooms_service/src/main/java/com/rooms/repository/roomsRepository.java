package com.rooms.repository;

import com.rooms.model.rooms;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface roomsRepository extends MongoRepository<rooms, Integer>
{

    List<rooms> findByAva(String ava);


}
