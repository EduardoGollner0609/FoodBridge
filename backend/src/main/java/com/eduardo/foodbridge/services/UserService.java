package com.eduardo.foodbridge.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eduardo.foodbridge.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;
	
}
