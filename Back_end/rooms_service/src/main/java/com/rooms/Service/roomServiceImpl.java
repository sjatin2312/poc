package com.rooms.Service;

import com.rooms.model.rooms;
import com.rooms.repository.roomsRepository;

import java.util.List;

public class roomServiceImpl implements roomService{


    roomsRepository roomaRepository;
    public List<rooms> getrooms(){
        return roomaRepository.findAll();
    }

    public rooms saverooms(rooms room){
        return roomaRepository.save(room);
    }

    public String deleterooms(int id){
        roomaRepository.deleteById(id);
        return "deleted";
    }
}
