package com.example.nailartresalespring.controller;

import com.example.nailartresalespring.models.StampingPlate;
import com.example.nailartresalespring.service.StampingPlateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/stampingplates")
public class StampingPlateController {

    @Autowired
    private StampingPlateService stampingPlateService;

    @GetMapping
    public Iterable<StampingPlate> listStampingPlates(){
        return stampingPlateService.listStampingPlates();
    }
}
