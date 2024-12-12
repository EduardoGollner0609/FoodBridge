package com.eduardo.foodbridge.controllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.eduardo.foodbridge.dtos.DonationDTO;
import com.eduardo.foodbridge.services.DonationService;

import jakarta.validation.Valid;

@RestController
@RequestMapping(value = "/donations")
public class DonationController {

	@Autowired
	private DonationService service;

	@PostMapping
	public ResponseEntity<DonationDTO> insert(@Valid @RequestBody DonationDTO donationDTO) {
		donationDTO = service.insert(donationDTO);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(donationDTO.getId())
				.toUri();
		return ResponseEntity.created(uri).body(donationDTO);
	}

	@GetMapping
	public ResponseEntity<Page<DonationDTO>> findAllPaged(Pageable pageable) {
		Page<DonationDTO> donations = service.findAllPaged(pageable);
		return ResponseEntity.ok(donations);
	}
}
