package com.eduardo.foodbridge.services;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eduardo.foodbridge.dtos.EmailDTO;
import com.eduardo.foodbridge.services.exceptions.EmailException;
import com.sendgrid.Method;
import com.sendgrid.Request;
import com.sendgrid.Response;
import com.sendgrid.SendGrid;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;

@Service
public class EmailService {

	@Autowired
	private SendGrid sendGrid;

	public void sendEmail(EmailDTO dto) {

		Email from = new Email("dudugollner@gmail.com", "FoodBridge");

		Email to = new Email(dto.getTo());

		Content content = new Content("text/html", dto.getBody());

		Mail mail = new Mail(from, dto.getSubject(), to, content);

		Request request = new Request();

		try {
			request.setMethod(Method.POST);
			request.setEndpoint("mail/send");
			request.setBody(mail.build());
			Response response = sendGrid.api(request);

			if (response.getStatusCode() >= 400 && response.getStatusCode() <= 500) {
				throw new EmailException(response.getBody());
			}
		} catch (IOException e) {
			throw new EmailException(e.getMessage());
		}
	}
}