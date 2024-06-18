package com.example.backend.repository;

import com.example.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUserName(String userName);

    @Query(value = "SELECT u.* FROM users u " +
            "JOIN user_roles ur ON u.id = ur.userId " +
            "WHERE ur.roleId = :roleId", nativeQuery = true)
    List<User> findByRoleId();
}
