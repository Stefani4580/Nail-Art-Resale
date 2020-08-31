package com.example.nailartresalespring.controller;

import com.example.nailartresalespring.models.NailPolish;
import com.example.nailartresalespring.service.NailPolishService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/nailpolish")
public class NailPolishController {

    @Autowired
    NailPolishService nailPolishService;

    @GetMapping
    public Iterable<NailPolish> listNailPolish(){
        return nailPolishService.listNailPolish();
    }

    @PostMapping
    public NailPolish createNailPolish(@RequestBody NailPolish nailPolish){
        return nailPolishService.createNailPolish(nailPolish);
    }
}
