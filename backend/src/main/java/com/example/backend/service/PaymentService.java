package com.example.backend.service;

import com.example.backend.entity.Address;
import com.example.backend.entity.OrderItem;
import com.example.backend.entity.Payment;
import com.example.backend.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public Payment processPayment(double amount, String method, List<OrderItem> orderItems, Address address, String username) {
        // Logic to process payment and save to database
        Payment payment = new Payment();
        payment.setAmount(amount);
        payment.setMethod(method);
        payment.setAddress(address);
        // Assuming you may want to link order items to payment, adjust as necessary
        payment.setOrderItems(orderItems);

        // Save payment to repository or perform further business logic
        return paymentRepository.save(payment);
    }
}