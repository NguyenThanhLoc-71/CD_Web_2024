package com.example.backend.dto;

public class AuthenticationResponse {
    private final String jwt;

    private final boolean isAdmin;

    public AuthenticationResponse(String jwt, boolean isAdmin) {
        this.jwt = jwt;
        this.isAdmin = isAdmin;
    }

    // getters
    public String getJwt() {
        return jwt;
    }

    public boolean isAdmin() {
        return isAdmin;
    }
}