package com.example.nailartresalespring.service;

import com.example.nailartresalespring.models.NailPolish;
import org.springframework.http.HttpStatus;

public interface NailPolishService {
    public Iterable<NailPolish> listNailPolish();
    public NailPolish createNailPolish(NailPolish nailPolish);
    public HttpStatus deleteNailPolishById(Long id);
}
