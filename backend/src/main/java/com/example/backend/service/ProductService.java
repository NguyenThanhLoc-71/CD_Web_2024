package com.example.backend.service;

import com.example.backend.entity.Product;
import com.example.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(Long productId) {
        return productRepository.findById(productId); // Truy cập sản phẩm bằng ID
    }

    public List<Product> getProductsByCategory(Long categoryId) {
        return productRepository.findByCategory_Id(categoryId); // Truy vấn sản phẩm theo danh mục
    }

    public List<Product> getProductsByPrice(Long categoryId, Double minPrice, Double maxPrice) {
        // Thực hiện truy vấn CSDL để lấy danh sách sản phẩm theo giá
        return productRepository.findByCategoryIdAndPriceBetween(categoryId, minPrice, maxPrice);
    }
    public List<Product> searchProducts(String keyword) {
        return productRepository.findByNameContainingIgnoreCase(keyword);
    }
}