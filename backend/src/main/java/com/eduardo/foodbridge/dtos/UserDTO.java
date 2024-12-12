package com.eduardo.foodbridge.dtos;

import java.util.ArrayList;
import java.util.List;

import com.eduardo.foodbridge.entities.Role;
import com.eduardo.foodbridge.entities.User;

public class UserDTO {

	private Long id;
	private String name;
	private String address;
	private String phone;
	private List<String> roles = new ArrayList<>();

	public UserDTO() {
	}

	public UserDTO(User user) {
		id = user.getId();
		name = user.getName();
		address = user.getAddress();
		phone = user.getPhone();
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public List<String> getRoles() {
		return roles;
	}

	public void setRoles(List<String> roles) {
		this.roles = roles;
	}

}
