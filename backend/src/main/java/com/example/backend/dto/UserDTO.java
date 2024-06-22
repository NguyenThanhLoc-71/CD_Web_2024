package com.example.backend.dto;

import java.util.Set;

public class UserDTO {
    private Long id;
    private String userName;
    private String phoneNumber;

    private String passWord;
    private Boolean enabled;
    private Set<String> roles;

    private String address;

    public UserDTO(Long id, String userName, String phoneNumber, Boolean enabled, Set<String> roles, String address) {
        this.id = id;
        this.userName = userName;
        this.phoneNumber = phoneNumber;
        this.enabled = enabled;
        this.roles = roles;
        this.address = address;
    }

    // Getters and Setters


    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPassWord() {
        return passWord;
    }

    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }

    public Set<String> getRoles() {
        return roles;
    }

    public void setRoles(Set<String> roles) {
        this.roles = roles;
    }
}