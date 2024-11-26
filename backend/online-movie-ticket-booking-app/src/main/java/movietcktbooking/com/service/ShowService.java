package movietcktbooking.com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import movietcktbooking.com.entity.Show;
import movietcktbooking.com.repository.ShowRepository;

@Service
public class ShowService {
	
	@Autowired
	ShowRepository showRepo;
	
	public String storeShow(Show show) {
        // Use the getTheatreId() and getMovieId() methods (which we added) to get the IDs
        Optional<Show> result = showRepo.findByTheatreAndMovie(
            show.getTheatre().getTheatreId(),  // get the theatre ID from the theatre object
            show.getMovie().getMovieId(),      // get the movie ID from the movie object
            show.getShowDate(),
            show.getStartTime()
        );

        if (result.isPresent()) {
            return "Show with the same theatre, movie, and start time already exists";
        } else {
            showRepo.save(show);
            return "Show saved successfully";
        }
    }

    public List<Show> findAllShows() {
        return showRepo.findAllShowsWithDetails();
    }
}
