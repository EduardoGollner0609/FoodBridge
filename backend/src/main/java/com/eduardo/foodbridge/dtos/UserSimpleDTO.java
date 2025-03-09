package com.eduardo.foodbridge.dtos;

import com.eduardo.foodbridge.entities.User;

public class UserSimpleDTO {

	private Long id;
	private String name;
	private String address;
	private String state;

	public UserSimpleDTO() {
	}

	public UserSimpleDTO(Long id, String name, String address, String state) {
		this.id = id;
		this.name = name;
		this.address = address;
		this.state = state;
	}

	public UserSimpleDTO(User user, CepDTO cepDTO) {
		id = user.getId();
		name = user.getName();
		address = user.getAddress();
		state = cepDTO.getEstado();
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

}
