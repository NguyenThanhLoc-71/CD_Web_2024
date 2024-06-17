package com.example.backend.controller;

import com.example.backend.entity.Product;
import com.example.backend.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping // Xử lý yêu cầu GET để lấy danh sách sản phẩm
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/{productId}") // Xử lý yêu cầu GET với tham số động
    public Product getProductById(@PathVariable Long productId) {
        Optional<Product> product = productService.getProductById(productId);
        // Nếu không tìm thấy sản phẩm, trả về 404
        return product.orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + productId));
    }
    @GetMapping("/search")
    public List<Product> searchProducts(@RequestParam String keyword) {
        return productService.searchProducts(keyword);
    }


}
