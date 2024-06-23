package com.example.backend.controller;

import com.example.backend.dto.ProductDTO;
import com.example.backend.entity.Product;
import com.example.backend.service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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

    @PostMapping("/add")
    public ResponseEntity<ProductDTO> createProduct(@RequestBody ProductDTO productDTO) {
        Product savedProduct = productService.saveProduct(productDTO);
        ProductDTO dto = new ProductDTO();
        dto.setName(savedProduct.getName());
        dto.setCategoryId(savedProduct.getCategory().getId());
        dto.setPrice(savedProduct.getPrice());
        dto.setSold(savedProduct.getSold());
        dto.setImage(savedProduct.getImage());
        dto.setRating(savedProduct.getRating());
        dto.setDiscount(savedProduct.getDiscount());
        return ResponseEntity.ok(dto);
    }

//    @PostMapping("/upload")
//    public ResponseEntity<String> uploadImage(@RequestParam("image") MultipartFile file) {
//        // Xử lý tải lên tệp
//        // Lưu tệp vào thư mục hoặc lưu trữ đám mây và trả về URL của tệp
//        return ResponseEntity.ok("Tệp đã tải lên thành công: " + file.getOriginalFilename());
//    }


}
