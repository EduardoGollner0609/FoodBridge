package com.eduardo.foodbridge.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eduardo.foodbridge.dtos.EmailMinDTO;
import com.eduardo.foodbridge.dtos.NewPasswordDTO;
import com.eduardo.foodbridge.services.AuthService;

import jakarta.validation.Valid;

@RestController
@RequestMapping(value = "auth")
public class AuthController {

	@Autowired
	private AuthService service;

	@PostMapping(value = "/recover-token")
	public ResponseEntity<Void> createRecoveryToken(@RequestBody @Valid EmailMinDTO body) {
		service.createRecoverToken(body);
		return ResponseEntity.noContent().build();
	}

	@PutMapping(value = "/new-password")
	public ResponseEntity<Void> saveNewPassword(@RequestBody @Valid NewPasswordDTO body) {
		service.saveNewPassword(body);
		return ResponseEntity.noContent().build();
	}

}
