package com.example.backend.service.Impl;

import com.example.backend.dto.UserDTO;
import com.example.backend.dto.UserProfileDTO;
import com.example.backend.entity.Role;
import com.example.backend.entity.User;

import java.util.List;
import java.util.Set;

public interface UserService {

    void createUser(String username, String rawPassword);
    User findByUserName(String userName);

    // Thêm phương thức này
    boolean userExists(String username);

    public List<UserDTO> getAllUsers();

    Set<Role> getUserRoles(String username);
    UserProfileDTO getUserProfile(Long userId);
}
