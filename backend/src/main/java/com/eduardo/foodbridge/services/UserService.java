package com.eduardo.foodbridge.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.eduardo.foodbridge.dtos.UserInsertDTO;
import com.eduardo.foodbridge.entities.Role;
import com.eduardo.foodbridge.entities.User;
import com.eduardo.foodbridge.repositories.UserRepository;

@Service
public class UserService implements UserDetailsService {

	@Autowired
	private UserRepository repository;

	public UserInsertDTO insert(UserInsertDTO userDTO) {
		User user = new User();
		copyDtoToEntity(user, userDTO);
		return new UserInsertDTO(repository.save(user));
	}

	private void copyDtoToEntity(User user, UserInsertDTO userDTO) {
		user.setEmail(userDTO.getEmail());
		user.setName(userDTO.getName());
		user.setPassowrd(userDTO.getPassword());
		user.setBirthDate(userDTO.getBirthDate());
		user.setPhone(userDTO.getPhone());
		user.setAddress(userDTO.getAddress());
		user.addRole(new Role(1L, "ROLE_USER"));
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<User> user = repository.findByEmail(username);

		if (user.isEmpty()) {
			throw new UsernameNotFoundException("Email Not Found");
		}

		return user.get();
	}

}
