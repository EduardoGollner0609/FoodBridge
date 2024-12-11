package com.eduardo.foodbridge.dtos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.eduardo.foodbridge.entities.Role;
import com.eduardo.foodbridge.entities.User;

public class UserDTO {

	private Long id;
	private String name;
	private LocalDate birthDate;
	private String phone;
	private String email;
	private String password;

	private List<String> roles = new ArrayList<>();

	public UserDTO() {
	}

	public UserDTO(User user) {
		id = user.getId();
		name = user.getName();
		birthDate = user.getBirthDate();
		phone = user.getPhone();
		email = user.getEmail();
		password = user.getPassword();
		for (Role role : user.getRoles()) {
			roles.add(role.getAuthority());
		}
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

	public LocalDate getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(LocalDate birthDate) {
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

	public List<String> getRoles() {
		return roles;
	}

	public void setRoles(List<String> roles) {
		this.roles = roles;
	}

}
