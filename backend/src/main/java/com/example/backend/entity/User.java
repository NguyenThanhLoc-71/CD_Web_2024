package com.example.backend.entity;

import javax.persistence.*;

import java.util.Set;

@Entity
@Table(name = "users")
public class User {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "username")
    private String userName;

    @Column(name = "phoneNumber")
    private String phoneNumber;
    @Column(name = "password")
    private String passWord;
    @Column(name = "enabled")
    private Boolean enabled;

    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
    private Set<UserRole> userRoles;


    public User() {

    }

    public User(Long id, String userName, String phoneNumber, String passWord, Boolean enabled, Set<UserRole> userRoles) {
        this.id = id;
        this.userName = userName;
        this.phoneNumber = phoneNumber;
        this.passWord = passWord;
        this.enabled = enabled;
        this.userRoles = userRoles;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassWord() {
        return passWord;
    }

    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }

    public Boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }

    public Set<UserRole> getUserRoles() {
        return userRoles;
    }

    public void setUserRoles(Set<UserRole> userRoles) {
        this.userRoles = userRoles;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

}