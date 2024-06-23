package com.example.backend.controller;

import com.example.backend.dto.UserProfileDTO;
import com.example.backend.service.Impl.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {

    @Autowired
    private UserService userService;

    @GetMapping
    public UserProfileDTO getProfile() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName(); // Lấy username của người dùng đang đăng nhập
        // Thay đổi lấy thông tin theo id của người dùng đang đăng nhập
        Long userId = userService.findByUserName(username).getId();
        return userService.getUserProfile(userId);
    }

}
