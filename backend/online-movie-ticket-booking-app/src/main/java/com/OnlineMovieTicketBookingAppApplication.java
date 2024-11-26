package com;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import jakarta.annotation.PostConstruct;
import movietcktbooking.com.entity.User;
import movietcktbooking.com.repository.UserRepository;

@SpringBootApplication(scanBasePackages = "movietcktbooking")
@EnableDiscoveryClient
@EntityScan("movietcktbooking.com.entity")
@EnableJpaRepositories(basePackages = "movietcktbooking.com.repository")
public class OnlineMovieTicketBookingAppApplication {
	
	@Autowired
	UserRepository userRepo;
	
	@PostConstruct
	public void init() {
		System.err.println("Default method of main class is called");
		User user = new User();
		
		user.setEmail("admin@simplilearn.in");
		user.setName("Admin");
		user.setPassword("Admin@#2024");
		user.setRole("admin");
		
		Optional<User> result = userRepo.findByEmail(user.getEmail());
		if(result.isPresent()) {
			System.err.println("Account is already present");
		} else {
			userRepo.save(user);
			System.err.println("Admin account created successfully");
		}
	}

	public static void main(String[] args) {
		SpringApplication.run(OnlineMovieTicketBookingAppApplication.class, args);
		System.err.println("Online movie ticket booking micro service up!");
	}

}
