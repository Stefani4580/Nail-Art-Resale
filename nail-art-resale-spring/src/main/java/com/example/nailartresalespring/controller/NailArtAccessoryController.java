package com.example.nailartresalespring.controller;

import com.example.nailartresalespring.models.NailArtAccessory;
import com.example.nailartresalespring.service.NailArtAccessoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/nailartaccessories")
public class NailArtAccessoryController {

    @Autowired
    NailArtAccessoryService nailArtAccessoryService;

    @GetMapping
    public Iterable<NailArtAccessory> listNailArtAccessories(){
        return nailArtAccessoryService.listNailArtAccessories();
    }

    @PostMapping
    public NailArtAccessory createNailArtAccessories(@RequestBody NailArtAccessory nailArtAccessories){
        return nailArtAccessoryService.createNailArtAccessory(nailArtAccessories);
    }

    @DeleteMapping("/nailartaccessory/{id}")
    public HttpStatus deleteNailArtAccessories(@PathVariable Long id){
        return nailArtAccessoryService.deleteNailArtAccessoryById(id);
    }

}
