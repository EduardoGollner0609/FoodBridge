package com.eduardo.foodbridge.dtos;

import com.eduardo.foodbridge.entities.Role;

public class RoleDTO {

	private Long id;
	private String authority;

	public RoleDTO() {
	}

	public RoleDTO(Role role) {
		id = role.getId();
		authority = role.getAuthority();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAuthority() {
		return authority;
	}

	public void setAuthority(String authority) {
		this.authority = authority;
	}

}