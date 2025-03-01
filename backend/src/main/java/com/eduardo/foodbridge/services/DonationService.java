package com.eduardo.foodbridge.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.eduardo.foodbridge.dtos.CepDTO;
import com.eduardo.foodbridge.dtos.DonationDTO;
import com.eduardo.foodbridge.dtos.DonationMinDTO;
import com.eduardo.foodbridge.entities.Donation;
import com.eduardo.foodbridge.entities.User;
import com.eduardo.foodbridge.projections.DonationProjection;
import com.eduardo.foodbridge.repositories.DonationRepository;
import com.eduardo.foodbridge.services.exceptions.CollectException;
import com.eduardo.foodbridge.services.exceptions.DatabaseException;
import com.eduardo.foodbridge.services.exceptions.ResourceNotFoundException;

import jakarta.persistence.EntityNotFoundException;

@Service
public class DonationService {

	@Autowired
	private DonationRepository repository;

	@Autowired
	private AuthService authService;

	@Autowired
	private AddressService addressService;

	@Transactional
	public DonationDTO insert(DonationDTO donationDTO) {
		Donation donation = new Donation();
		copyDtoToEntity(donation, donationDTO);
		return new DonationDTO(repository.save(donation));
	}

	@Transactional(readOnly = true)
	public Page<DonationMinDTO> findAllPaged(Pageable pageable) {
		CepDTO response = findAddressByCep();
		Page<DonationProjection> donations = repository.findAllByState(response.getEstado(), pageable);
		return donations.map(donation -> new DonationMinDTO(donation.getId(), donation.getUserName(),
				donation.getDescription(), donation.getCity(), donation.getState()));
	}

	@Transactional(readOnly = true)
	public DonationDTO findById(Long id) {
		Donation donation = repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Doação não encontrada"));
		return new DonationDTO(donation);
	}

	@Transactional
	public DonationDTO updateCollectDonation(Long id) {
		try {
			Donation donation = repository.getReferenceById(id);
			collectDonation(donation, authService.authenticated());
			return new DonationDTO(repository.save(donation));
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Doação não encontrada");
		}
	}

	@Transactional(propagation = Propagation.SUPPORTS)
	public void delete(Long id) {
		if (!repository.existsById(id)) {
			throw new ResourceNotFoundException("Doação não encontrada");
		}
		try {
			repository.deleteById(id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Erro de integridade referencial");
		}
	}

	@Transactional(readOnly = true)
	private CepDTO findAddressByCep() {
		User user = authService.authenticated();
		return addressService.findAddressByCep(user.getAddress());
	}

	private void collectDonation(Donation donation, User user) {
		if (user.getId() == donation.getUser().getId()) {
			throw new CollectException("Você não pode coletar sua doação.");
		}
		if (donation.getCollector() != null) {
			throw new CollectException("Essa doação já tem alguém para entregar.");
		}

		donation.setCollector(user);
	}

	private void copyDtoToEntity(Donation donation, DonationDTO donationDTO) {
		donation.setDescription(donationDTO.getDescription());

		User user = authService.authenticated();
		donation.setUser(user);

		CepDTO response = findAddressByCep();
		donation.setCity(response.getLocalidade());
		donation.setState(response.getEstado());
	}
}
