package com.eduardo.foodbridge.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.eduardo.foodbridge.dtos.UserDTO;
import com.eduardo.foodbridge.dtos.UserInsertDTO;
import com.eduardo.foodbridge.entities.Role;
import com.eduardo.foodbridge.entities.User;
import com.eduardo.foodbridge.repositories.UserRepository;

@Service
public class UserService implements UserDetailsService {

	@Autowired
	private UserRepository repository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	public UserDTO insert(UserInsertDTO userDTO) {
		User user = new User();
		copyDtoToEntity(user, userDTO);
		user.setEmail(userDTO.getEmail());
		user.setBirthDate(user.getBirthDate());
		user.setPassowrd(passwordEncoder.encode(userDTO.getPassword()));
		return new UserDTO(repository.save(user));
	}

	private void copyDtoToEntity(User user, UserDTO userDTO) {
		user.setName(userDTO.getName());
		user.setPhone(userDTO.getPhone());
		user.setAddress(userDTO.getAddress());
		user.getRoles().clear();
		user.addRole(new Role(1L, "ROLE_USER"));
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = repository.findByEmail(username);

		if (user == null) {
			throw new UsernameNotFoundException("Email Not Found");
		}

		return user;
	}

}
