package com.eduardo.foodbridge.dtos;

import java.time.Instant;

import com.eduardo.foodbridge.services.validations.UserInsertValid;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.Size;

@UserInsertValid
public class UserInsertDTO extends UserDTO {

	@PastOrPresent(message = "Data inválida")
	private Instant birthDate;
	@Email(message = "Email inválido")
	private String email;
	@NotBlank(message = "Campo requerido")
	@Size(min = 6, max = 30, message = "Senha deve entre 6 a 30 caracteres")
	private String password;

	public UserInsertDTO() {
		super();
	}

	public Instant getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(Instant birthDate) {
		this.birthDate = birthDate;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
