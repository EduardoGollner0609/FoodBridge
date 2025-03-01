package com.eduardo.foodbridge.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import com.eduardo.foodbridge.dtos.CepDTO;

@Service
public class AddressService {

	@Autowired
	private RestTemplate restTemplate;

	@Transactional
	@Cacheable(value = "addressCache", key = "#address")
	public CepDTO findAddressByCep(String address) {
		String url = "https://viacep.com.br/ws/" + address + "/json/";
		return restTemplate.getForObject(url, CepDTO.class);
	}

}
