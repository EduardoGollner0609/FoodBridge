package com.eduardo.foodbridge.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import com.eduardo.foodbridge.dtos.CepDTO;
import com.eduardo.foodbridge.dtos.DonationDTO;
import com.eduardo.foodbridge.dtos.DonationMinDTO;
import com.eduardo.foodbridge.entities.Donation;
import com.eduardo.foodbridge.entities.User;
import com.eduardo.foodbridge.repositories.DonationRepository;
import com.eduardo.foodbridge.services.exceptions.DatabaseException;
import com.eduardo.foodbridge.services.exceptions.ResourceNotFoundException;

import jakarta.persistence.EntityNotFoundException;

@Service
public class DonationService {

	@Autowired
	private DonationRepository repository;

	@Autowired
	private RestTemplate restTemplate;

	@Autowired
	private AuthService authService;

	@Transactional
	public DonationDTO insert(DonationDTO donationDTO) {
		Donation donation = new Donation();
		copyDtoToEntity(donation, donationDTO);
		return new DonationDTO(repository.save(donation));
	}

	@Transactional(readOnly = true)
	public Page<DonationMinDTO> findAllPaged(Pageable pageable) {
		CepDTO response = findAddressByCep();
		Page<Donation> donations = repository.findAllByState(response.getEstado(), pageable);
		return donations.map(donation -> new DonationMinDTO(donation));
	}

	@Transactional(readOnly = true)
	public DonationDTO findById(Long id) {
		Donation donation = repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Doação não encontrada"));
		return new DonationDTO(donation);
	}

	public DonationDTO update(Long id, DonationDTO donationDTO) {
		try {
			Donation donation = repository.getReferenceById(id);
			copyDtoToEntity(donation, donationDTO);
			return new DonationDTO(repository.save(donation));
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Doação não encontrada");
		}
	}

	@Transactional
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

	private CepDTO findAddressByCep() {
		User user = authService.authenticated();
		CepDTO response = restTemplate.getForObject("https://viacep.com.br/ws/" + user.getAddress() + "/json/",
				CepDTO.class);
		return response;
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
