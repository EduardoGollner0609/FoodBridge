package com.eduardo.foodbridge.dtos;

import com.eduardo.foodbridge.entities.Donation;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;

public class DonationDTO {

	@Schema(description = "Database generated Donation Id")
	private Long id;
	@NotBlank(message = "Campo requerido")
	@Schema(description = "Donation description")
	private String description;
	@Schema(description = "User who owns the donation")
	private UserMinDTO user;
	private String city;
	private String state;

	public DonationDTO() {
	}

	public DonationDTO(Donation donation) {
		id = donation.getId();
		description = donation.getDescription();
		user = new UserMinDTO(donation.getUser());
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

	public UserMinDTO getUser() {
		return user;
	}

	public void setUser(UserMinDTO user) {
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
