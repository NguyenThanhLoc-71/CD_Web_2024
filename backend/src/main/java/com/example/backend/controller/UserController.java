package com.example.backend.controller;

import com.example.backend.entity.User;
import com.example.backend.model.request.UserLogin;
import com.example.backend.model.response.Res;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/user")
public class UserController {
    @Autowired
    UserService userService;

    @CrossOrigin
    @PostMapping(value = "/register")
    public Res register(@RequestBody User user){
        return userService.register(user);
    }

    @CrossOrigin
    @PostMapping(value = "/login")
    public Res login(@RequestBody UserLogin login){
        return userService.login(login);
    }

    @CrossOrigin
    @GetMapping(value = "/getUsers")
    public List<User> getUsers(){
        return userService.getUsers();
    }
}
