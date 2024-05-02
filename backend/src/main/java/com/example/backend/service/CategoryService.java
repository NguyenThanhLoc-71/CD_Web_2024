package com.example.backend.service;

import com.example.backend.controller.ResourceNotFoundException;
import com.example.backend.entity.Category;
import com.example.backend.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository typeProductRepository) {
        this.categoryRepository = typeProductRepository;
    }

    public List<Category> getAllCategory() {
        return categoryRepository.findAll();
    }

    public String getCategoryNameById(Long categoryId) {
        // Tìm danh mục theo ID
        Optional<Category> category = categoryRepository.findById(categoryId);

        // Nếu không tìm thấy, trả về ngoại lệ
        if (category.isPresent()) {
            return category.get().getName(); // Trả về tên danh mục
        } else {
            throw new ResourceNotFoundException("Category not found with id: " + categoryId);
        }
    }


}
