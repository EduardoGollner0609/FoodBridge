package com.eduardo.foodbridge.dtos;

import java.util.ArrayList;
import java.util.List;

import com.eduardo.foodbridge.entities.Donation;
import com.eduardo.foodbridge.entities.Role;
import com.eduardo.foodbridge.entities.User;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class UserDTO {

	private Long id;
	@NotBlank(message = "Campo requerido")
	@Size(min = 5, max = 80, message = "Nome deve ter entre 5 a 80 caracteres")
	private String name;
	@Size(min = 5, max = 80, message = "O endereço deve ter entre 5 a 80 caracteres")
	@NotBlank(message = "Campo requerido")
	private String address;
	private String phone;
	private List<DonationMinDTO> donations = new ArrayList<>();
	private List<String> roles = new ArrayList<>();

	public UserDTO() {
	}

	public UserDTO(User user) {
		id = user.getId();
		name = user.getName();
		address = user.getAddress();
		phone = user.getPhone();
		for (Donation donation : user.getDonations()) {
			donations.add(new DonationMinDTO(donation));
		}
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
