package com.eduardo.foodbridge.dtos;

import com.eduardo.foodbridge.entities.Donation;

import jakarta.validation.constraints.NotBlank;

public class DonationDTO {

	private Long id;
	@NotBlank(message = "Campo requerido")
	private String description;
	private UserDTO user;
	private String city;
	private String state;

	public DonationDTO() {
	}

	public DonationDTO(Donation donation) {
		id = donation.getId();
		description = donation.getDescription();
		user = new UserDTO(donation.getUser());
		city = donation.getCity();
		state = donation.getState();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

}
