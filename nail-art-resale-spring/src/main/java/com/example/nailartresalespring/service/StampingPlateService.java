package com.example.nailartresalespring.service;

import com.example.nailartresalespring.models.StampingPlate;
import org.springframework.http.HttpStatus;

public interface StampingPlateService {
    public Iterable<StampingPlate> listStampingPlates();
    public StampingPlate createStampingPlate(StampingPlate stampingPlate);
    public HttpStatus deleteStampingPlateById(Long id);
    public StampingPlate updateStampingPlate(StampingPlate stampingPlate);
}
