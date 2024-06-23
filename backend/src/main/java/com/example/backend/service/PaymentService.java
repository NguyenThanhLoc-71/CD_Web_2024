package com.example.backend.service;

import com.example.backend.entity.Address;
import com.example.backend.entity.OrderItem;
import com.example.backend.entity.Payment;
import com.example.backend.entity.User;
import com.example.backend.repository.PaymentRepository;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private UserRepository userRepository;

    public Payment processPayment(long userId, double amount, String method, List<OrderItem> orderItems, Address address) {
        // Logic to process payment and save to database
        User user = userRepository.findById(userId).orElseThrow();
        Payment payment = new Payment();
        payment.setAmount(amount);
        payment.setMethod(method);
        payment.setAddress(address);
        // Assuming you may want to link order items to payment, adjust as necessary
        payment.setOrderItems(orderItems);
        payment.setUser(user);

        // Save payment to repository or perform further business logic
        return paymentRepository.save(payment);
    }
    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    public List<Payment> getAllPaymentsByUserId(Long userId) {
        // Example implementation assuming you have a PaymentRepository
        return paymentRepository.findByUserId(userId);
    }

}