package com.eduardo.foodbridge.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.eduardo.foodbridge.dtos.UserDTO;
import com.eduardo.foodbridge.dtos.UserInsertDTO;
import com.eduardo.foodbridge.entities.Role;
import com.eduardo.foodbridge.entities.User;
import com.eduardo.foodbridge.projections.UserDetailsProjection;
import com.eduardo.foodbridge.repositories.UserRepository;

@Service
public class UserService implements UserDetailsService {

	@Autowired
	private UserRepository repository;
	@Autowired
	private AuthService authService;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Transactional
	public UserDTO insert(UserInsertDTO userDTO) {
		User user = new User();
		copyDtoToEntity(user, userDTO);
		user.setEmail(userDTO.getEmail());
		user.setBirthDate(userDTO.getBirthDate());
		user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
		return new UserDTO(repository.save(user));
	}

	private void copyDtoToEntity(User user, UserDTO userDTO) {
		user.setName(userDTO.getName());
		user.setPhone(userDTO.getPhone());
		user.setAddress(userDTO.getAddress());
		user.getRoles().clear();
		user.addRole(new Role(1L, "ROLE_USER"));
	}

	@Transactional(readOnly = true)
	public UserDTO getMe() {
		User entity = authService.authenticated();
		return new UserDTO(entity);
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		List<UserDetailsProjection> result = repository.searchUserAndRolesByEmail(username);

		if (result.size() == 0) {
			throw new UsernameNotFoundException("Email inválido");
		}

		User user = new User();
		user.setEmail(result.get(0).getUsername());
		user.setPassword(result.get(0).getPassword());
		for (UserDetailsProjection projection : result) {
			user.addRole(new Role(projection.getRoleId(), projection.getAuthority()));
		}

		return user;

	}

}
