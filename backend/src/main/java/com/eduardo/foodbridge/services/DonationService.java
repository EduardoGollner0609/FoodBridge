package com.eduardo.foodbridge.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.eduardo.foodbridge.dtos.CepDTO;
import com.eduardo.foodbridge.dtos.CollectorIdDTO;
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
	public Page<DonationMinDTO> findAllPagedByState(Pageable pageable, String state) {
		Page<DonationProjection> donations = repository.findAllByState(state, pageable);
		return donations.map(donation -> new DonationMinDTO(donation.getId(), donation.getUserName(),
				donation.getDescription(), donation.getCity(), donation.getState()));
	}

	@Transactional(readOnly = true)
	public Page<DonationMinDTO> findAllPaged(Pageable pageable) {
		Page<Donation> donations = repository.findAll(pageable);
		return donations.map(donation -> new DonationMinDTO(donation));
	}

	@Transactional(readOnly = true)
	public DonationDTO findById(Long id) {
		Donation donation = repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Doação não encontrada"));
		return new DonationDTO(donation);
	}

	@Transactional
	public DonationDTO updateCollectDonation(Long id, CollectorIdDTO collectorIdDTO) {
		try {
			Donation donation = repository.getReferenceById(id);

			if (collectorIdDTO == null) {
				collectorIdDTO = new CollectorIdDTO(authService.authenticated().getId());
			}

			collectDonation(donation, collectorIdDTO);
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

	private void collectDonation(Donation donation, CollectorIdDTO collectorIdDTO) {
		if (collectorIdDTO.getId() == donation.getUser().getId()) {
			throw new CollectException("Você não pode coletar sua doação.");
		}
		if (donation.getCollector() != null && donation.getCollector().getId() == collectorIdDTO.getId()) {
			throw new CollectException("Essa doação já é sua.");
		}
		if (donation.getCollector() != null) {
			throw new CollectException("Essa doação já tem alguém para entregar.");
		}

		User collector = new User();
		collector.setId(collectorIdDTO.getId());
		donation.setCollector(collector);
	}

	private void copyDtoToEntity(Donation donation, DonationDTO donationDTO) {
		donation.setDescription(donationDTO.getDescription());

		User user = authService.authenticated();
		donation.setUser(user);

		CepDTO response = addressService.findAddressByCep(user.getAddress());
		donation.setCity(response.getLocalidade());
		donation.setState(response.getEstado());
	}
}
