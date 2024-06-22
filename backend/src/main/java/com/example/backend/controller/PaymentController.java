package com.example.backend.controller;

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

    @PostMapping("/create")
    public ResponseEntity<?> createPayment(@RequestBody PaymentRequest paymentRequest) {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            String currentPrincipalName = authentication.getName();

            // Assuming you have a service to process payments
            Payment payment = paymentService.processPayment(paymentRequest.getAmount(),
                    paymentRequest.getMethod(), paymentRequest.getOrderItems(),
                    paymentRequest.getAddress(), currentPrincipalName);

            return ResponseEntity.ok(payment);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to create payment.");
        }
    }
}