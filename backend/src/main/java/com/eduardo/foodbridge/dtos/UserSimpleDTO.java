package com.eduardo.foodbridge.dtos;

import com.eduardo.foodbridge.entities.User;

public class UserSimpleDTO {

	private Long id;
	private String name;
	private String birthDate;
	private String phone;
	private String email;
	private String address;

	public UserSimpleDTO() {
	}

	public UserSimpleDTO(Long id, String name, String birthDate, String phone, String email, String address) {
		this.id = id;
		this.name = name;
		this.birthDate = birthDate;
		this.phone = phone;
		this.email = email;
		this.address = address;
	}

	public UserSimpleDTO(User user) {
		id = user.getId();
		name = user.getName();
		birthDate = user.getBirthDate();
		phone = user.getPhone();
		email = user.getPhone();
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

	public String getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(String birthDate) {
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

}
