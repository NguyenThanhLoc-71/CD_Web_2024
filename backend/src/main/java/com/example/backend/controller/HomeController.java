package com.example.backend.controller;

import com.example.backend.entity.Product;
import com.example.backend.entity.TypeProduct;
import com.example.backend.service.ProductService;
import com.example.backend.service.TypeProductService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/home")
public class HomeController {
    private final ProductService productService;
    private TypeProductService typeProductService;

    public HomeController(ProductService productService, TypeProductService typeProductService) {
        this.productService = productService;
        this.typeProductService = typeProductService;
    }

    @GetMapping
    public Map<String, Object> getHomeData() {
        Map<String, Object> homeData = new HashMap<>();
        homeData.put("products", productService.getAllProducts());
        homeData.put("productTypes", typeProductService.getAllTypeProducts());
        return homeData;
    }
}
