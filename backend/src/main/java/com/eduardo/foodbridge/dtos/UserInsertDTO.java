package com.eduardo.foodbridge.dtos;

import java.time.Instant;

import com.eduardo.foodbridge.entities.User;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.Size;

public class UserInsertDTO {

	private Long id;
	@NotBlank(message = "Campo requerido")
	private String name;
	@PastOrPresent(message = "Data inválida")
	private Instant birthDate;
	private String phone;
	@Email(message = "Email inválido")
	private String email;
	@Size(min = 6, message = "Minimo de 6 caracteres")
	private String password;
	@NotBlank(message = "Campo requerido")
	private String address;

	public UserInsertDTO() {
	}

	public UserInsertDTO(User user) {
		id = user.getId();
		name = user.getName();
		birthDate = user.getBirthDate();
		phone = user.getPhone();
		email = user.getEmail();
		password = user.getPassword();
		address = user.getAddress();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Instant getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(Instant birthDate) {
		this.birthDate = birthDate;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

}
