package com.eduardo.foodbridge.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class EmailMinDTO {

	@NotBlank(message = "Campo requerido")
	@Email(message = "Email inválido")
	private String email;

	public EmailMinDTO() {
	}

	public EmailMinDTO(String email) {
		this.email = email;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
