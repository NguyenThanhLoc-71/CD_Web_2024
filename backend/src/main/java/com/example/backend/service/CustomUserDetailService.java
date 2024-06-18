package com.example.backend.service;

import com.example.backend.dto.UserDTO;
import com.example.backend.entity.CustomUserDetails;
import com.example.backend.entity.Role;
import com.example.backend.entity.User;
import com.example.backend.service.Impl.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Service
public class CustomUserDetailService implements UserDetailsService {

    private final UserService userService;

    @Autowired
    public CustomUserDetailService(@Lazy UserService userService) {
        this.userService = userService;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userService.findByUserName(username);
        if(user == null){
            throw new UsernameNotFoundException("User not found");
        }

        Collection<GrantedAuthority> grantedAuthoritySet = new HashSet<>();
        Set<Role> roles = userService.getUserRoles(username);
        for (Role role : roles) {
            grantedAuthoritySet.add(new SimpleGrantedAuthority(role.getName()));
        }
        return new CustomUserDetails(user, grantedAuthoritySet);
    }
}
