package com.eduardo.foodbridge.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.eduardo.foodbridge.dtos.EmailDTO;
import com.eduardo.foodbridge.dtos.UserDTO;
import com.eduardo.foodbridge.dtos.UserInsertDTO;
import com.eduardo.foodbridge.dtos.UserSimpleDTO;
import com.eduardo.foodbridge.entities.Role;
import com.eduardo.foodbridge.entities.User;
import com.eduardo.foodbridge.projections.UserDetailsProjection;
import com.eduardo.foodbridge.repositories.UserRepository;
import com.eduardo.foodbridge.services.exceptions.ResourceNotFoundException;

@Service
public class UserService implements UserDetailsService {

	@Autowired
	private UserRepository repository;

	@Autowired
	private AuthService authService;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private EmailService emailService;

	@Transactional
	public UserDTO insert(UserInsertDTO userInsertDTO) {
		User user = new User();
		copyDtoToEntity(user, userInsertDTO);
		user.setEmail(userInsertDTO.getEmail());
		user.setBirthDate(userInsertDTO.getBirthDate());
		user.setPassword(passwordEncoder.encode(userInsertDTO.getPassword()));
		UserDTO userDTO = new UserDTO(repository.save(user));
		EmailDTO emailDTO = new EmailDTO(userInsertDTO.getEmail(), "Seja bem vindo(a)",
				"Seja muito bem vindo(a) ao FoodBridge, é um prazer enorme tê-lo conosco, fique a vontade para doar e ajudar as pessoas que realmente necessitam, estamos juntos nessa missão!");
		emailService.sendEmail(emailDTO);
		return userDTO;
	}

	private void copyDtoToEntity(User user, UserDTO userDTO) {
		user.setName(userDTO.getName());
		user.setPhone(userDTO.getPhone());
		user.setAddress(userDTO.getAddress());
		user.getRoles().clear();
		user.addRole(new Role(1L, "ROLE_USER"));
	}

	@Transactional(readOnly = true)
	public UserSimpleDTO getMe() {
		User entity = authService.authenticated();
		return new UserSimpleDTO(entity);
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

	@Transactional(propagation = Propagation.SUPPORTS)
	public void delete(Long id) {

		if (!repository.existsById(id)) {
			throw new ResourceNotFoundException("Usuário não existe");
		}

		User userEmpty = new User();
		userEmpty.setId(id);
		userEmpty = repository.save(userEmpty);
		repository.deleteById(userEmpty.getId());

	}

}
