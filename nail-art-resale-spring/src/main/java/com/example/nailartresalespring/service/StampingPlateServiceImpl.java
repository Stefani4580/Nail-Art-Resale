package com.example.nailartresalespring.service;

import com.example.nailartresalespring.models.StampingPlate;
import com.example.nailartresalespring.repositories.StampingPlateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class StampingPlateServiceImpl implements StampingPlateService{

    @Autowired
    private StampingPlateRepository stampingPlateRepository;

    @Override
    public Iterable<StampingPlate> listStampingPlates() {
        return stampingPlateRepository.findAll();
    }

    @Override
    public StampingPlate createStampingPlate(StampingPlate stampingPlate) {
        return stampingPlateRepository.save(stampingPlate);
    }

    @Override
    public HttpStatus deleteStampingPlateById(Long id) {
        stampingPlateRepository.deleteById(id);
        return HttpStatus.OK;
    }

    @Override
    public StampingPlate updateStampingPlate(StampingPlate stampingPlate) {
        return stampingPlateRepository.save(stampingPlate);
    }
}
