package com.example.nailartresalespring.service;

import com.example.nailartresalespring.models.NailArtAccessory;
import org.springframework.http.HttpStatus;

public interface NailArtAccessoryService {
    public Iterable<NailArtAccessory> listNailArtAccessories();
    public NailArtAccessory createNailArtAccessory(NailArtAccessory nailArtAccessories);
    public HttpStatus deleteNailArtAccessoryById(Long id);
}
