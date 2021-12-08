package com.rooms.resource;


import com.rooms.model.rooms;
import com.rooms.repository.roomsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/rooms")
public class roomsController {



    @Autowired
    private roomsRepository repository;

    @GetMapping("/hello")
    public String hello()
    {
        return "rooms";
    }

    @PostMapping("/addrooms")
    public String saverooms(@RequestBody rooms rooms)
    {
        repository.save(rooms);
        return "Room added with id : " + rooms.getId();
    }
    @GetMapping("/findAllrooms")
    public List<rooms> getrooms(){
        return repository.findAll();
    }
    @GetMapping("/findAvarooms/{ava}")
    public List<rooms> getrooms(@PathVariable String ava)
    {
        return repository.findByAva(ava);
    }






    @GetMapping("/findAllrooms/{id}")
    public Optional<rooms> getrooms(@PathVariable int id)
    {
        return repository.findById(id);
    }
    @DeleteMapping("/delete/{id}")
    public String deleterooms(@PathVariable int id)
    {
        repository.deleteById(id);
        return "Room deleted with id " + id;
    }

}


