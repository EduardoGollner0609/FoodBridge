package com.eduardo.foodbridge.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eduardo.foodbridge.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
