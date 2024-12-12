package com.eduardo.foodbridge.dtos;

import com.eduardo.foodbridge.entities.Donation;

public class DonationDTO {

	private Long id;
	private String description;
	private Long userId;

	public DonationDTO() {
	}

	public DonationDTO(Donation donation) {
		id = donation.getId();
		description = donation.getDescription();
		userId = donation.getUser().getId();
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

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

}
