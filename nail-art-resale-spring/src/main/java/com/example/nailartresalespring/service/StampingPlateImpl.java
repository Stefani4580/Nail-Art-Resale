package com.example.nailartresalespring.service;

import com.example.nailartresalespring.models.StampingPlate;
import com.example.nailartresalespring.repositories.StampingPlateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StampingPlateImpl implements StampingPlateService{

    @Autowired
    private StampingPlateRepository stampingPlateRepository;

    @Override
    public Iterable<StampingPlate> listStampingPlates() {
        return stampingPlateRepository.findAll();
    }
}
