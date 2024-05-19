package com.example.backend.service;

import com.example.backend.entity.User;

public interface UserService {

    void createUser(String username, String rawPassword);
    User findByUserName(String userName);

    // Thêm phương thức này
    boolean userExists(String username);
}
