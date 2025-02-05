package com.eduardo.foodbridge.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.eduardo.foodbridge.entities.Donation;

public interface DonationRepository extends JpaRepository<Donation, Long> {

	@Query(value = "SELECT obj FROM Donation obj JOIN FETCH obj.user WHERE obj.state = :state", countQuery = "SELECT COUNT(obj) FROM Donation obj WHERE obj.state = :state")
	Page<Donation> findAllByState(String state, Pageable pageable);

}
