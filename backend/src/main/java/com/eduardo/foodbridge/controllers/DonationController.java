package com.eduardo.foodbridge.controllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.eduardo.foodbridge.dtos.DonationDTO;
import com.eduardo.foodbridge.dtos.DonationMinDTO;
import com.eduardo.foodbridge.services.DonationService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

@RestController
@RequestMapping(value = "/donations")
@Tag(name = "Donations", description = "Controller for Donations")
public class DonationController {

	@Autowired
	private DonationService service;

	@PreAuthorize("hasRole('ROLE_USER')")
	@PostMapping
	public ResponseEntity<DonationDTO> insert(@Valid @RequestBody DonationDTO donationDTO) {
		donationDTO = service.insert(donationDTO);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(donationDTO.getId())
				.toUri();
		return ResponseEntity.created(uri).body(donationDTO);
	}

	@Operation(
		    description = "Get All Donations Paged",
		    summary = "Find All Donations Paged",
		    responses = {
		         @ApiResponse(description = "Ok", responseCode = "200"),
		         @ApiResponse(description = "Bad Request", responseCode = "400"),
		         @ApiResponse(description = "Unauthorized", responseCode = "401"),
		    }
		)
	@PreAuthorize("hasRole('ROLE_USER')")
	@GetMapping(produces = "application/json")
	public ResponseEntity<Page<DonationMinDTO>> findAllPaged(Pageable pageable) {
		Page<DonationMinDTO> donations = service.findAllPaged(pageable);
		return ResponseEntity.ok(donations);
	}

	@Operation(
		    description = "Get Donation By Id",
		    summary = "Find Donation By Id",
		    responses = {
		         @ApiResponse(description = "Ok", responseCode = "200"),
		         @ApiResponse(description = "Bad Request", responseCode = "400"),
		         @ApiResponse(description = "Unauthorized", responseCode = "401"),
		         @ApiResponse(description = "Not Found", responseCode = "404"),
		    }
		)
	@PreAuthorize("hasRole('ROLE_USER')")
	@GetMapping(value = "/{id}", produces = "application/json")
	public ResponseEntity<DonationDTO> findById(@PathVariable Long id) {
		DonationDTO donationDTO = service.findById(id);
		return ResponseEntity.ok(donationDTO);
	}

	@Operation(
		    description = "Update Donation Collect Status",
		    summary = "Update Donation Collect Status",
		    responses = {
		         @ApiResponse(description = "Ok", responseCode = "200"),
		         @ApiResponse(description = "Bad Request", responseCode = "400"),
		         @ApiResponse(description = "Unauthorized", responseCode = "401"),
		         @ApiResponse(description = "Not Found", responseCode = "404"),
		    }
		)
	@PreAuthorize("hasRole('ROLE_USER')")
	@PutMapping(value = "collect/{id}", produces = "application/json")
	public ResponseEntity<DonationDTO> updateCollectDonation(@PathVariable Long id) {
		DonationDTO donationDTO = service.updateCollectDonation(id);
		return ResponseEntity.ok(donationDTO);
	}

	@Operation(
		    description = "Delete Donation",
		    summary = "Delete Donation",
		    responses = {
		         @ApiResponse(description = "No Content", responseCode = "204"),
		         @ApiResponse(description = "Bad Request", responseCode = "400"),
		         @ApiResponse(description = "Unauthorized", responseCode = "401"),
		         @ApiResponse(description = "Not Found", responseCode = "404"),
		    }
		)
	@PreAuthorize("hasRole('ROLE_USER')")
	@DeleteMapping(value = "/{id}", produces = "application/json")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
}
