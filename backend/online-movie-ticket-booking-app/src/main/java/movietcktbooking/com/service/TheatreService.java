package movietcktbooking.com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import movietcktbooking.com.entity.Theatre;
import movietcktbooking.com.repository.TheatreRepository;

@Service
public class TheatreService {
	
	@Autowired
	TheatreRepository theatreRepo;
	
	public String storeTheatre(Theatre theatre) {
		Optional<Theatre> result = theatreRepo.findByNameAndLocation(theatre.getName(), theatre.getLocation());
		
		if(result.isPresent()) {
			return "Theatre with the same name and location already exists";
		} else {
			theatreRepo.save(theatre);
			return "Theatre saved successfully";
		}		
	}
	
	public List<Theatre> findAllTheatres() {
		return theatreRepo.findAll();
	}
	
	public List<String> findAllLocations() {
		return theatreRepo.findAllLocations();
	}
	
	

}
