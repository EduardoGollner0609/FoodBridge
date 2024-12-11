package com.eduardo.foodbridge.entities;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_user")
public class User {

	private Long id;
	private String name;
	private LocalDate birthDate;
	private String phone;
	private String email;
	private String passowrd;

	public User() {
	}

	public User(Long id, String name, LocalDate birthDate, String phone, String email, String passowrd) {
		this.id = id;
		this.name = name;
		this.birthDate = birthDate;
		this.phone = phone;
		this.email = email;
		this.passowrd = passowrd;
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

	public LocalDate getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(LocalDate birthDate) {
		this.birthDate = birthDate;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassowrd() {
		return passowrd;
	}

	public void setPassowrd(String passowrd) {
		this.passowrd = passowrd;
	}

}