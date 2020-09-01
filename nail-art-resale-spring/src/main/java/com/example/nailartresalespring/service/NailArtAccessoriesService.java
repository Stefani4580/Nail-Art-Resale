package com.example.nailartresalespring.service;

import com.example.nailartresalespring.models.NailArtAccessories;
import org.springframework.http.HttpStatus;

public interface NailArtAccessoriesService {
    public Iterable<NailArtAccessories> listNailArtAccessories();
    public NailArtAccessories createNailArtAccessories(NailArtAccessories nailArtAccessories);
    public HttpStatus deleteNailArtAccessoriesById(Long id);
}
