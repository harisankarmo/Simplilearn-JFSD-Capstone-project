package movietcktbooking.com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import movietcktbooking.com.entity.Movie;
import movietcktbooking.com.repository.MovieRepository;

@Service
public class MovieService {
	@Autowired
	MovieRepository movieRepo;
	
	public String storeMovie(Movie movie) {
		Optional<Movie> result = movieRepo.findByTitleAndLang(movie.getTitle(), movie.getLanguage());
		
		if(result.isPresent()) {
			return "Movie with the same title and language already exists";
		} else {
			movieRepo.save(movie);
			return "Movie saved successfully";
		}		
	}
	
	public List<Movie> findAllMovies() {
		return movieRepo.findAll();
	}
	
	public Optional<Movie> findById(Integer movieId) {
		return movieRepo.findById(movieId);
	}

}
