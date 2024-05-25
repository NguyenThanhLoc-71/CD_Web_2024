package com.example.backend.controller;

import com.example.backend.entity.Category;
import com.example.backend.entity.Product;
import com.example.backend.service.CategoryService;
import com.example.backend.service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/categories") // Đường dẫn gốc
public class CategoryController {
    private final ProductService productService;
    private final CategoryService categoryService;

    public CategoryController(ProductService productService, CategoryService categoryService) {
        this.productService = productService;
        this.categoryService = categoryService;
    }

    @GetMapping// Trả về danh sách danh mục
    public ResponseEntity<List<Category>> getAllCategories() {
        return ResponseEntity.ok(categoryService.getAllCategory());
    }

    @GetMapping("/{categoryId}") // Trả về sản phẩm theo danh mục
    public ResponseEntity<Map<String, Object>> getProductsByCategory(@PathVariable Long categoryId) {
        Map<String, Object> response = new HashMap<>();
        response.put("categoryName", categoryService.getCategoryNameById(categoryId)); // Tên danh mục
        response.put("products", productService.getProductsByCategory(categoryId)); // Sản phẩm theo danh mục
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{categoryId}/byPrice")
    public ResponseEntity<List<Product>> getProductsByPriceRange(
            @PathVariable Long categoryId,
            @RequestParam Double minPrice,
            @RequestParam Double maxPrice) {
        List<Product> products = productService.getProductsByPrice(categoryId, minPrice, maxPrice);
        return ResponseEntity.ok(products);
    }
}