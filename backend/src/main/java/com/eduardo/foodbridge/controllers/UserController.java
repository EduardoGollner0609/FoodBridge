package com.eduardo.foodbridge.controllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.eduardo.foodbridge.dtos.UserDTO;
import com.eduardo.foodbridge.dtos.UserInsertDTO;
import com.eduardo.foodbridge.services.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

@RestController
@RequestMapping(value = "/users")
@Tag(name = "Users", description = "Controller for Users")
public class UserController {

	@Autowired
	private UserService service;

	@Operation(description = "Create a new user", summary = "Create a new user", responses = {
			@ApiResponse(description = "Created", responseCode = "201"),
			@ApiResponse(description = "Bad Request", responseCode = "400"),
			@ApiResponse(description = "Unprocessable Entity", responseCode = "422") })
	@PostMapping(produces = "application/json")
	public ResponseEntity<UserDTO> insert(@Valid @RequestBody UserInsertDTO userInsertDTO) {
		UserDTO userDTO = service.insert(userInsertDTO);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(userDTO.getId())
				.toUri();
		return ResponseEntity.created(uri).body(userDTO);
	}

	@Operation(description = "Return me", summary = "Return me", responses = {
			@ApiResponse(description = "Ok", responseCode = "200"),
			@ApiResponse(description = "Unauthorized", responseCode = "401") })
	@SecurityRequirement(name = "bearerAuth")
	@PreAuthorize("hasRole('ROLE_USER')")
	@GetMapping(value = "/me", produces = "application/json")
	public ResponseEntity<UserDTO> getMe() {
		UserDTO dto = service.getMe();
		return ResponseEntity.ok(dto);
	}

	@Operation(description = "Delete me", summary = "Delete me", responses = {
			@ApiResponse(description = "Ok", responseCode = "204"),
			@ApiResponse(description = "Unauthorized", responseCode = "401"),
			@ApiResponse(description = "Not Found", responseCode = "404") })
	@SecurityRequirement(name = "bearerAuth")
	@PreAuthorize("hasRole('ROLE_USER')")
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

}
