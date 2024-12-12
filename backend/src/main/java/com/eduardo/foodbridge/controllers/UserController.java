package com.eduardo.foodbridge.controllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.eduardo.foodbridge.dtos.UserInsertDTO;
import com.eduardo.foodbridge.services.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping(value = "/users")
public class UserController {

	@Autowired
	private UserService service;

	@PostMapping
	public ResponseEntity<UserInsertDTO> insert(@Valid @RequestBody UserInsertDTO userInsertDTO) {
		userInsertDTO = service.insert(userInsertDTO);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(userInsertDTO.getId())
				.toUri();
		return ResponseEntity.created(uri).body(userInsertDTO);
	}
}
