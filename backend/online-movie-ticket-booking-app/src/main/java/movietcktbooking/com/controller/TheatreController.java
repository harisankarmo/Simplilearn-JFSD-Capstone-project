package movietcktbooking.com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import movietcktbooking.com.entity.Theatre;
import movietcktbooking.com.service.TheatreService;

@RestController
@RequestMapping("theatre")
@CrossOrigin
public class TheatreController {
	
	
	@Autowired
	TheatreService ts;
	
	@PostMapping(value = "add", consumes = MediaType.APPLICATION_JSON_VALUE)
	public String storeTheatre(@RequestBody Theatre theatre) {
		return ts.storeTheatre(theatre);
		
	}
	
	@GetMapping(value = "list", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Theatre> findAll() {
		return ts.findAllTheatres();
	}

}
