package com.eduardo.foodbridge.dtos;

import com.eduardo.foodbridge.entities.Donation;

public class DonationMinDTO {

	private Long id;
	private String userName;
	private String address;
	private String description;

	public DonationMinDTO() {
	}

	public DonationMinDTO(Donation donation) {
		id = donation.getId();
		userName = donation.getUser().getName();
		address = donation.getUser().getAddress();
		description = donation.getDescription();
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
