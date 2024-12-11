package com.eduardo.foodbridge.dtos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.eduardo.foodbridge.entities.Role;
import com.eduardo.foodbridge.entities.User;

public class UserDTO {

	private Long id;
	private String name;
	private LocalDate birthDate;
	private String phone;
	private String email;
	private String password;

	private List<String> roles = new ArrayList<>();

	public UserDTO() {
	}

	public UserDTO(User user) {
		id = user.getId();
		name = user.getName();
		birthDate = user.getBirthDate();
		phone = user.getPhone();
		email = user.getEmail();
		password = user.getPassowrd();
		for (Role role : user.getRoles()) {
			roles.add(role.getAuthority());
		}
	}

}
