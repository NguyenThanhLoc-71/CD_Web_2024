package com.example.backend.repository;

import com.example.backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByNameContainingIgnoreCase(String name);
    List<Product> findByCategory_Id(Long categoryId); // Tìm sản phẩm theo danh mục
    List<Product> findByCategoryIdAndPriceBetween(Long categoryId, Double minPrice, Double maxPrice);
}
