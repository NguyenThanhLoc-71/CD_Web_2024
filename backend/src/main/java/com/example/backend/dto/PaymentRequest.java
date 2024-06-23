 package com.example.backend.dto;

import com.example.backend.entity.CartItem;
import com.example.backend.entity.Address;
import com.example.backend.entity.OrderItem;

import java.util.List;

 public class PaymentRequest {

     private long userId;
     private double amount;
     private String method;
     private List<OrderItem> orderItems;
     private Address address;

     public double getAmount() {
         return amount;
     }

     public void setAmount(double amount) {
         this.amount = amount;
     }

     public String getMethod() {
         return method;
     }

     public void setMethod(String method) {
         this.method = method;
     }

     public List<OrderItem> getOrderItems() {
         return orderItems;
     }

     public void setOrderItems(List<OrderItem> orderItems) {
         this.orderItems = orderItems;
     }

     public Address getAddress() {
         return address;
     }

     public void setAddress(Address address) {
         this.address = address;
     }

     public long getUserId() {
         return userId;
     }

     public void setUserId(long userId) {
         this.userId = userId;
     }

     // Getters and setters
 }