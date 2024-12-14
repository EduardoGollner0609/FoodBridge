package com.eduardo.foodbridge.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.eduardo.foodbridge.entities.Donation;

public interface DonationRepository extends JpaRepository<Donation, Long> {

	Page<Donation> findAllByState(String state, Pageable pagebale);
	
}
