package com.itmo.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {
	// TODO вынести данные из application.yml . почитать про vault
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}
