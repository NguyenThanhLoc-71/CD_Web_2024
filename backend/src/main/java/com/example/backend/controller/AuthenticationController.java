package com.example.backend.controller;

import com.example.backend.component.JwtUtil;
import com.example.backend.dto.AuthenticationRequest;
import com.example.backend.dto.AuthenticationResponse;
import com.example.backend.dto.RegistrationRequest;
import com.example.backend.entity.User;
import com.example.backend.service.Impl.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {

        try {
            UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
            if (passwordEncoder.matches(authenticationRequest.getPassword(), userDetails.getPassword())) {
                authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
                );
            } else {
                throw new BadCredentialsException("Incorrect username or password");
            }
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }

        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
        final User user = userService.findByUserName(authenticationRequest.getUsername());
        final String jwt = jwtUtil.generateToken(userDetails, user.getId());

        boolean isAdmin = userDetails.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ADMIN"));

        return ResponseEntity.ok(new AuthenticationResponse(jwt, isAdmin));
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegistrationRequest registrationRequest) {
        if (userService.userExists(registrationRequest.getUsername())) {
            return ResponseEntity.badRequest().body("Tài khoản đã tồn tại!");
        }

        userService.createUser(registrationRequest.getUsername(), registrationRequest.getPassword());
        return ResponseEntity.ok("Tạo tài khoản thành công");
    }
}

