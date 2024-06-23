package com.example.backend.service;

import com.example.backend.dto.UserDTO;
import com.example.backend.dto.UserProfileDTO;
import com.example.backend.entity.Role;
import com.example.backend.entity.User;
import com.example.backend.entity.UserRole;
import com.example.backend.repository.UserRepository;

import com.example.backend.service.Impl.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;


    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImpl(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void createUser(String username, String rawPassword) {
        if (rawPassword == null || rawPassword.isEmpty()) {
            throw new IllegalArgumentException("Password must not be empty");
            // Hoặc có thể xử lý theo cách khác tùy vào yêu cầu của bạn
        }

        String encodedPassword = passwordEncoder.encode(rawPassword);
        User user = new User();
        user.setUserName(username);
        user.setPassWord(encodedPassword);
        userRepository.save(user);
    }


    @Override
    @Transactional(readOnly = true)
    public User findByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }

//    @Override
//    @Transactional(readOnly = true)
//    public User findByUserName(String userName) {
//        User user = userRepository.findByUserName(userName);
//        if (user == null) {
//            return null;
//        }
//
//        // Ensure roles are initialized
//        user.getUserRoles().size(); // This triggers lazy loading if needed
//
//        // Map User to UserDTO
//        return new UserDTO(
//                user.getId(),
//                user.getUserName(),
//                user.getPhoneNumber(),
//                user.getEnabled(),
//                user.getUserRoles().stream().map(ur -> ur.getRole().getName()).collect(Collectors.toSet())
//        );
//    }

    @Override
    public boolean userExists(String username) {
        return userRepository.findByUserName(username) != null;
    }

    @Override
    @Transactional(readOnly = true)
    public List<UserDTO> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map(user -> new UserDTO(
                        user.getId(),
                        user.getUserName(),
                        user.getPhoneNumber(),
                        user.getEnabled(),
                        user.getUserRoles().stream().map(ur -> ur.getRole().getName()).collect(Collectors.toSet()),
                        user.getAddress()
                ))
                .collect(Collectors.toList());
    }

    @Override
    public Set<Role> getUserRoles(String username) {
        User user = userRepository.findByUserName(username);
        if (user == null) {
            return Collections.emptySet();
        }
        return user.getUserRoles().stream()
                .map(UserRole::getRole)
                .collect(Collectors.toSet());
    }

    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public UserProfileDTO getUserProfile(Long userId) {
        User user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            throw new IllegalArgumentException("User not found with id: " + userId);
        }
        return new UserProfileDTO(user.getId(), user.getUserName(), user.getPhoneNumber(),user.getAddress());
    }
}
