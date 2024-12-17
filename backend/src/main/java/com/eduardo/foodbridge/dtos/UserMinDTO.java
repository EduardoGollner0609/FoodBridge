package com.eduardo.foodbridge.dtos;

import com.eduardo.foodbridge.entities.User;

public class UserMinDTO {

	private Long id;
	private String name;
	private String phone;

	public UserMinDTO() {
	}

	public UserMinDTO(User user) {
		id = user.getId();
		name = user.getName();
		phone = user.getPhone();
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

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

}
