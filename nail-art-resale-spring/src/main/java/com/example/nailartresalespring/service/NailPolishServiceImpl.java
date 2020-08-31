package com.example.nailartresalespring.service;

import com.example.nailartresalespring.models.NailPolish;
import com.example.nailartresalespring.repositories.NailPolishRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class NailPolishServiceImpl implements NailPolishService {
    @Autowired
    NailPolishRepository nailPolishRepository;

    @Override
    public Iterable<NailPolish> listNailPolish() {
        return nailPolishRepository.findAll();
    }

    @Override
    public NailPolish createNailPolish(NailPolish nailPolish) {
        return nailPolishRepository.save(nailPolish);
    }

    @Override
    public HttpStatus deleteNailPolish(Long id) {
        nailPolishRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
