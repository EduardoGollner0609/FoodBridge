package com.eduardo.foodbridge.services;

import java.time.Instant;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.eduardo.foodbridge.dtos.EmailDTO;
import com.eduardo.foodbridge.dtos.EmailMinDTO;
import com.eduardo.foodbridge.entities.PasswordRecover;
import com.eduardo.foodbridge.entities.User;
import com.eduardo.foodbridge.repositories.PasswordRecoverRepository;
import com.eduardo.foodbridge.repositories.UserRepository;
import com.eduardo.foodbridge.services.exceptions.ResourceNotFoundException;

@Service
public class AuthService {

	@Value("${email.password-recover.token.minutes}")
	private Long tokenMinutes;

	@Value("${email.password-recover.uri}")
	private String recoverUri;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordRecoverRepository passowRecoverRepository;

	@Autowired
	private EmailService emailService;

	@Transactional(readOnly = true)
	protected User authenticated() {
		try {
			Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
			Jwt jwtPrincipal = (Jwt) authentication.getPrincipal();
			String username = jwtPrincipal.getClaim("username");
			return userRepository.findByEmail(username);
		} catch (Exception e) {
			throw new UsernameNotFoundException("Invalid user");
		}
	}

	@Transactional
	public void createRecoverToken(EmailMinDTO emailMinDTO) {
		User user = userRepository.findByEmail(emailMinDTO.getEmail());

		if (user == null) {
			throw new ResourceNotFoundException("Email não encontrado");
		}

		String token = UUID.randomUUID().toString();

		PasswordRecover passwordRecover = new PasswordRecover();
		passwordRecover.setEmail(emailMinDTO.getEmail());
		passwordRecover.setToken(token);
		passwordRecover.setExpiration(Instant.now().plusSeconds(tokenMinutes * 60L));

		passwordRecover = passowRecoverRepository.save(passwordRecover);

		String body = "Acesse o link para definir uma nova senha: " + recoverUri + token;

		EmailDTO emailDTO = new EmailDTO(emailMinDTO.getEmail(), "Recuperação de senha", body);

		emailService.sendEmail(emailDTO);

	}

}
