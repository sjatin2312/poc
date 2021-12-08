package com.rooms.Service;

import com.rooms.model.rooms;

import java.util.List;

public interface roomService {

    public List<rooms> getrooms();

    public rooms saverooms(rooms room);

    public String deleterooms(int id);
}
