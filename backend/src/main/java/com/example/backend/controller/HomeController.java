package com.example.backend.controller;

import com.example.backend.service.ProductService;
import com.example.backend.service.CategoryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/home")
public class HomeController {

    private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
    private final ProductService productService;
    private final CategoryService categoryService;

    public HomeController(ProductService productService, CategoryService typeProductService) {
        this.productService = productService;
        this.categoryService = typeProductService;
    }

    @GetMapping
    public Map<String, Object> getHomeData() {
        logger.info("Fetching home data");
        Map<String, Object> homeData = new HashMap<>();
        homeData.put("products", productService.getAllProducts());
        homeData.put("categories", categoryService.getAllCategory());
        return homeData;
    }
}
