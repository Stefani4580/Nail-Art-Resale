package com.example.nailartresalespring.controller;

import com.example.nailartresalespring.models.NailArtAccessories;
import com.example.nailartresalespring.service.NailArtAccessoriesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

@Service
@CrossOrigin
@RequestMapping("/nailartaccessories")
public class NailArtAccessoriesController {

    @Autowired
    NailArtAccessoriesService nailArtAccessoriesService;

    @GetMapping
    public Iterable<NailArtAccessories> listNailArtAccessories(){
        return nailArtAccessoriesService.listNailArtAccessories();
    }

    @PostMapping
    public NailArtAccessories createNailArtAccessories(@RequestBody NailArtAccessories nailArtAccessories){
        return nailArtAccessoriesService.createNailArtAccessories(nailArtAccessories);
    }

    @DeleteMapping("/nailartaccessory/{id}")
    public HttpStatus deleteNailArtAccessories(@PathVariable Long id){
        return nailArtAccessoriesService.deleteNailArtAccessoriesById(id);
    }

}
