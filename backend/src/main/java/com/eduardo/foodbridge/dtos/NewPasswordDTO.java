package com.eduardo.foodbridge.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class NewPasswordDTO {

	private String token;

	@NotBlank(message = "Campo requerido")
	@Size(min = 6, max = 30, message = "Senha deve entre 6 a 30 caracteres")
	private String password;
	
	public NewPasswordDTO() {
	}

	public NewPasswordDTO(String token,	String password) {
		this.token = token;
		this.password = password;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
