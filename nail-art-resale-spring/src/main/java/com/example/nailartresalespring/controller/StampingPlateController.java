package com.example.nailartresalespring.controller;

import com.example.nailartresalespring.models.StampingPlate;
import com.example.nailartresalespring.service.StampingPlateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.type.StandardMethodMetadata;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/stampingplates")
public class StampingPlateController {

    @Autowired
    private StampingPlateService stampingPlateService;

    @GetMapping
    public Iterable<StampingPlate> listStampingPlates(){
        return stampingPlateService.listStampingPlates();
    }

    @PostMapping
    public StampingPlate createStampingPlate(@RequestBody StampingPlate stampingPlate){
        return stampingPlateService.createStampingPlate(stampingPlate);
    }

    @PutMapping
    public StampingPlate updateStampingPlate(@RequestBody StampingPlate stampingPlate){
        return stampingPlateService.updateStampingPlate(stampingPlate);
    }

    @DeleteMapping("/stampingplate/{id}")
    public HttpStatus deleteStampingPlateById(@PathVariable Long id){
        return stampingPlateService.deleteStampingPlateById(id);
    }

}
