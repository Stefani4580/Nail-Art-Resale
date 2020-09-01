package com.example.nailartresalespring.service;

import com.example.nailartresalespring.models.NailArtAccessory;
import com.example.nailartresalespring.repositories.NailArtAccessoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class NailArtAccessoryServiceImpl implements NailArtAccessoryService {

    @Autowired
    NailArtAccessoryRepository nailArtAccessoryRepository;

    @Override
    public Iterable<NailArtAccessory> listNailArtAccessories() {
        return nailArtAccessoryRepository.findAll();
    }

    @Override
    public NailArtAccessory createNailArtAccessory(NailArtAccessory nailArtAccessories) {
        return nailArtAccessoryRepository.save(nailArtAccessories);
    }

    @Override
    public HttpStatus deleteNailArtAccessoryById(Long id) {
        nailArtAccessoryRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
