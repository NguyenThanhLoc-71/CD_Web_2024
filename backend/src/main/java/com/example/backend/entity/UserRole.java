package com.example.backend.entity;

import javax.persistence.*;

@Entity
@Table(name = "user_roles")
public class UserRole {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "userId",referencedColumnName = "id")
    private User user;
    @ManyToOne
    @JoinColumn(name = "roleId",referencedColumnName = "id")
    private Role role;

    public UserRole() {
        super();
        // TODO Auto-generated constructor stub
    }

    public UserRole(Long id, User user, Role role) {
        super();
        this.id = id;
        this.user = user;
        this.role = role;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}