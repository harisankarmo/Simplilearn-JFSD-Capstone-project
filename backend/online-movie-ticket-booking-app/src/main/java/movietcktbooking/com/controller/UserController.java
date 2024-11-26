package movietcktbooking.com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import movietcktbooking.com.entity.User;
import movietcktbooking.com.service.LoginService;

@RestController
@RequestMapping("user")
@CrossOrigin
public class UserController {
	
	@Autowired
	LoginService loginService;
	
	@PostMapping(value = "signin", consumes = MediaType.APPLICATION_JSON_VALUE)
	public String SignIn(@RequestBody User user) {
		return loginService.SignIn(user);
	}
	
	@PostMapping(value = "signup", consumes = MediaType.APPLICATION_JSON_VALUE)
	public String SignUp(@RequestBody User user) {
		return loginService.SignUp(user);
	}

}
