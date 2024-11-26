package movietcktbooking.com.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import movietcktbooking.com.entity.User;

import movietcktbooking.com.repository.UserRepository;

@Service
public class LoginService {
	
	@Autowired
	UserRepository userRepository;
	
	public String SignIn(User user) {
		Optional<User> result = userRepository.findByEmail(user.getEmail());
		if(result.isPresent()) {
			User usr = result.get();
			if(user.getRole() == null || user.getRole().equals("")) {
				return "You must have to provide value for user role";
			}
			if(usr.getPassword().equals(user.getPassword())) {
				if(user.getRole().equals("admin") && usr.getRole().equals("admin")) {
					return "Admin login successful";
				} else if(user.getRole().equals("customer") && usr.getRole().equals("customer")) {
					return "Customer login successful";
				} else {
					return "User type is wrong";
				}
				
			} else {
				return "Password is wrong";
			}
		} else {
			return "Email is wrong";
		}
	}
	
	public String SignUp(User user) {
		if(user.getRole().equals("admin")) {
			return "You can't create admin account";
		} else {
			Optional<User> result = userRepository.findByEmail(user.getEmail());
			if(result.isPresent()) {
				return "Account already exists";
			} else {
				userRepository.save(user);
				return "Account created successfully";
			}
		}		
	}

}
