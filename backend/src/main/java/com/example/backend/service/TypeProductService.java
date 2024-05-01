package com.example.backend.service;

import com.example.backend.entity.TypeProduct;
import com.example.backend.repository.TypeProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeProductService {
    private final TypeProductRepository typeProductRepository;

    public TypeProductService(TypeProductRepository typeProductRepository) {
        this.typeProductRepository = typeProductRepository;
    }

    public List<TypeProduct> getAllTypeProducts() {
        return typeProductRepository.findAll();
    }
}
