package com.eduardo.foodbridge.dtos;

import com.eduardo.foodbridge.entities.Donation;

public class DonationMinDTO {

	private Long id;
	private String userName;
	private String description;
	private String city;
	private String state;

	public DonationMinDTO() {
	}

	public DonationMinDTO(Long id, String userName, String description, String city, String state) {
		this.id = id;
		this.userName = userName;
		this.description = description;
		this.city = city;
		this.state = state;
	}

	public DonationMinDTO(Donation donation) {
		id = donation.getId();
		userName = donation.getUser().getName();
		description = donation.getDescription();
		city = donation.getCity();
		state = donation.getState();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
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
