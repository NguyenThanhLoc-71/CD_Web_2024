package com.example.backend.service.Impl;

import com.example.backend.entity.CartItem;

import java.util.List;

public interface CartService {
    List<CartItem> getCartItems(Long userId);

    CartItem addProductToCart(Long userId, Long productId, int quantity);

    CartItem updateCartItem(Long cartItemId, int quantity);

    void removeCartItem(Long cartItemId);
}
