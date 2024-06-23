package com.example.backend.dto;

public class UserProfileDTO {
    private Long id;
    private String username;
    private String phoneNumber;
    // Các thông tin khác cần thiết có thể thêm vào đây
    private String address;
    public UserProfileDTO(Long id, String username, String phoneNumber,String address) {
        this.id = id;
        this.username = username;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}

