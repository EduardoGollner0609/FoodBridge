package com.eduardo.foodbridge.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.eduardo.foodbridge.dtos.DonationDTO;
import com.eduardo.foodbridge.entities.Donation;
import com.eduardo.foodbridge.entities.User;
import com.eduardo.foodbridge.repositories.DonationRepository;

@Service
public class DonationService {

	@Autowired
	private DonationRepository repository;

	public DonationDTO insert(DonationDTO donationDTO) {
		Donation donation = new Donation();
		copyDtoToEntity(donation, donationDTO);
		return new DonationDTO(repository.save(donation));
	}

	public Page<DonationDTO> findAllPaged(Pageable pageable) {
		Page<Donation> donations = repository.findAll(pageable);
		return donations.map(donation -> new DonationDTO(donation));
	}

	private void copyDtoToEntity(Donation donation, DonationDTO donationDTO) {
		donation.setDescription(donationDTO.getDescription());

		User user = new User();

		user.setId(donation.getUser().getId());
		donation.setUser(user);
	}
}
