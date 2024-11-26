package movietcktbooking.com.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import movietcktbooking.com.entity.Movie;
import movietcktbooking.com.service.MovieService;

@RestController
@RequestMapping("movies")
@CrossOrigin
public class MovieController {
	
	@Autowired
	MovieService ms;
	
	@PostMapping(value = "add", consumes = MediaType.APPLICATION_JSON_VALUE)
	public String storeMovie(@RequestBody Movie movie) {
		return ms.storeMovie(movie);
		
	}
	
	@GetMapping(value = "/", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Movie> findAll() {
		return ms.findAllMovies();
	}
	
	@GetMapping(value = "/{movieId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public Optional<Movie> findById(@PathVariable Integer movieId) {
		return ms.findById(movieId);
	}
	
	

}
