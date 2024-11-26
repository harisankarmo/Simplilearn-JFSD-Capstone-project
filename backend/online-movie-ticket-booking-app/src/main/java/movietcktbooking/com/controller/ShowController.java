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

import movietcktbooking.com.entity.Show;
import movietcktbooking.com.service.ShowService;

@RestController
@RequestMapping("shows")
@CrossOrigin
public class ShowController {

	@Autowired
	ShowService ss;
	
	@PostMapping(value = "add", consumes = MediaType.APPLICATION_JSON_VALUE)
	public String storeTheatre(@RequestBody Show show) {
		return ss.storeShow(show);
		
	}
	
	@GetMapping(value = "list", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Show> findAll() {
		return ss.findAllShows();
	}	
	
}
