package com.eduardo.foodbridge.dtos;

import com.eduardo.foodbridge.services.validations.UserInsertValid;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@UserInsertValid
public class UserInsertDTO extends UserDTO {

	@NotBlank(message = "Campo requerido")
	@Size(min = 6, max = 30, message = "Senha deve entre 6 a 30 caracteres")
	private String password;

	public UserInsertDTO() {
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
