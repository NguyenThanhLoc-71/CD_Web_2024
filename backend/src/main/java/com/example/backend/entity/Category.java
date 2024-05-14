package com.example.backend.entity;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import javax.persistence.*;

import java.util.Set;


@Entity
@Table(name = "categories")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "category", fetch = FetchType.LAZY)
    @JsonManagedReference // Quan hệ "cha"
    private Set<Product> products; // Mối quan hệ với sản phẩm


    // Getters và Setters


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Product> getProducts() {
        return products;
    }

    public void setProducts(Set<Product> products) {
        this.products = products;
    }
}