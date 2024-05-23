package com.example.backend.service;

import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;

import com.example.backend.service.Impl.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;


    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImpl(@Lazy  PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void createUser(String username, String rawPassword) {
        String encodedPassword = passwordEncoder.encode(rawPassword);
        User user = new User();
        user.setUserName(username);
        user.setPassWord(encodedPassword);
        userRepository.save(user);
    }

    @Override
    public User findByUserName(String userName) {

        return userRepository.findByUserName(userName);
    }

    @Override
    public boolean userExists(String username) {
        return userRepository.findByUserName(username) != null;
    }
}
