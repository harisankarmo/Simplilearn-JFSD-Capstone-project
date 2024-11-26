package movietcktbooking.com.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import movietcktbooking.com.entity.Show;
import movietcktbooking.com.entity.Theatre;


@Repository
public interface TheatreRepository extends JpaRepository<Theatre, Integer> {
	@Query("SELECT t FROM Theatre t WHERE t.name = :name AND t.location = :location")
	Optional<Theatre> findByNameAndLocation(@Param("name") String name, @Param("location") String location);
	
	// Modified query to fetch all locations where theatre is present
	@Query("SELECT DISTINCT t.location FROM Theatre t ORDER BY t.location ASC")
	List<String> findAllLocations();	
}
