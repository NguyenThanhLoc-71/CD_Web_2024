package com.example.backend.controller;

import com.example.backend.service.ProductService;
import com.example.backend.service.CategoryService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/home")
public class HomeController {
    private final ProductService productService;
    private CategoryService categoryService;

    public HomeController(ProductService productService, CategoryService typeProductService) {
        this.productService = productService;
        this.categoryService = typeProductService;
    }

    @GetMapping
    public Map<String, Object> getHomeData() {
        Map<String, Object> homeData = new HashMap<>();
        homeData.put("products", productService.getAllProducts());
        homeData.put("categories", categoryService.getAllCategory());
        return homeData;
    }
}
