package com.eduardo.foodbridge.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eduardo.foodbridge.entities.PasswordRecover;

public interface PasswordRecoverRepository extends JpaRepository<PasswordRecover, Long> {

}
