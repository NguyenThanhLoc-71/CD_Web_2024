package com.example.backend.controller;

import com.example.backend.component.JwtUtil;
import com.example.backend.dto.PaymentRequest;
import com.example.backend.entity.CartItem;
import com.example.backend.entity.Payment;
import com.example.backend.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @Autowired
    private JwtUtil jwtUtil;

//    @PostMapping
//    public CartItem addProductToCart(@RequestHeader("Authorization") String token, @RequestParam Long productId, @RequestParam int quantity) {
//        String jwt = token.substring(7);
//        Long userId = jwtUtil.extractUserId(jwt);
//        return cartService.addProductToCart(userId, productId, quantity);
//    }

    @PostMapping("/create")
    public ResponseEntity<?> createPayment(@RequestHeader("Authorization") String token,@RequestBody PaymentRequest paymentRequest) {
        try {
            String jwt = token.substring(7);
//            Long userId = jwtUtil.extractUserId(jwt);

            // Assuming you have a service to process payments
            Payment payment = paymentService.processPayment(paymentRequest.getUserId(),paymentRequest.getAmount(),
                    paymentRequest.getMethod(), paymentRequest.getOrderItems(),
                    paymentRequest.getAddress());

            return ResponseEntity.ok(payment);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to create payment.");
        }
    }
    @GetMapping("/all")
    public ResponseEntity<List<Payment>> getAllPayments(@RequestHeader("Authorization") String token) {
        try {
            String jwt = token.substring(7);
            List<Payment> payments = paymentService.getAllPayments();
            return ResponseEntity.ok(payments);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/user")
    public ResponseEntity<List<Payment>> getAllPaymentsByUser(@RequestHeader("Authorization") String token) {
        try {
            String jwt = token.substring(7);
            Long userId = jwtUtil.extractUserId(jwt);
            List<Payment> payments = paymentService.getAllPaymentsByUserId(userId);
            return ResponseEntity.ok(payments);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}