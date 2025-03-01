package com.eduardo.foodbridge;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class FoodbridgeApplication {

	public static void main(String[] args) {
		SpringApplication.run(FoodbridgeApplication.class, args);
	}

}
