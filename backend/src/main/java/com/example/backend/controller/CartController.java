package com.example.backend.controller;

import com.example.backend.component.JwtUtil;
import com.example.backend.entity.CartItem;
import com.example.backend.service.Impl.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping
    public List<CartItem> getCartItems(@RequestHeader("Authorization") String token) {
        String jwt = token.substring(7);
        Long userId = jwtUtil.extractUserId(jwt);
        return cartService.getCartItems(userId);
    }

    @PostMapping
    public CartItem addProductToCart(@RequestHeader("Authorization") String token, @RequestParam Long productId, @RequestParam int quantity) {
        String jwt = token.substring(7);
        Long userId = jwtUtil.extractUserId(jwt);
        return cartService.addProductToCart(userId, productId, quantity);
    }

    @PutMapping("/{cartItemId}")
    public CartItem updateCartItem(@PathVariable Long cartItemId, @RequestParam int quantity) {
        return cartService.updateCartItem(cartItemId, quantity);
    }

    @DeleteMapping("/{cartItemId}")
    public void removeCartItem(@PathVariable Long cartItemId) {
        cartService.removeCartItem(cartItemId);
    }
}