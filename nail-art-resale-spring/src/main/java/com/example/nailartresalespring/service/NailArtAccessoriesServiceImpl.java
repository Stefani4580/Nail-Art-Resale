package com.example.nailartresalespring.service;

import com.example.nailartresalespring.models.NailArtAccessories;
import com.example.nailartresalespring.repositories.NailArtAccessoriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

public class NailArtAccessoriesServiceImpl implements NailArtAccessoriesService{

    @Autowired
    NailArtAccessoriesRepository nailArtAccessoriesRepository;

    @Override
    public Iterable<NailArtAccessories> listNailArtAccessories() {
        return nailArtAccessoriesRepository.findAll();
    }

    @Override
    public NailArtAccessories createNailArtAccessories(NailArtAccessories nailArtAccessories) {
        return nailArtAccessoriesRepository.save(nailArtAccessories);
    }

    @Override
    public HttpStatus deleteNailArtAccessoriesById(Long id) {
        nailArtAccessoriesRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
