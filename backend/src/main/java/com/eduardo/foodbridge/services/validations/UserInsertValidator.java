package com.eduardo.foodbridge.services.validations;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import com.eduardo.foodbridge.controllers.handlers.FieldMessage;
import com.eduardo.foodbridge.dtos.CepDTO;
import com.eduardo.foodbridge.dtos.UserInsertDTO;
import com.eduardo.foodbridge.repositories.UserRepository;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class UserInsertValidator implements ConstraintValidator<UserInsertValid, UserInsertDTO> {

	@Autowired
	private UserRepository repository;

	@Autowired
	private RestTemplate restTemplate;

	@Override
	public void initialize(UserInsertValid ann) {
	}

	@Override
	public boolean isValid(UserInsertDTO dto, ConstraintValidatorContext context) {

		List<FieldMessage> list = new ArrayList<>();

		if (dto.getEmail() == null || dto.getName() == null || dto.getBirthDate() == null) {
			return false;
		}

		try {
			CepDTO response = restTemplate.getForObject("https://viacep.com.br/ws/" + dto.getAddress() + "/json/",
					CepDTO.class);

			if (response.getErro() != null) {
				list.add(new FieldMessage("address", "Erro ao buscar esse CEP"));
			}
		} catch (HttpClientErrorException e) {
			list.add(new FieldMessage("address", "CEP inválido"));
		}

		if (repository.existsByEmail(dto.getEmail())) {
			list.add(new FieldMessage("email", "Email já existe"));
		}

		if (repository.existsByNameIgnoreCase(dto.getName())) {
			list.add(new FieldMessage("name", "Nome já existe"));
		}

		LocalDate date = LocalDate.parse(dto.getBirthDate());
		if (!date.isBefore(LocalDate.now())) {
			list.add(new FieldMessage("birthdate", "Data inválida"));
		}

		for (FieldMessage e : list) {
			context.disableDefaultConstraintViolation();
			context.buildConstraintViolationWithTemplate(e.getMessage()).addPropertyNode(e.getFieldName())
					.addConstraintViolation();
		}
		return list.isEmpty();
	}

}
