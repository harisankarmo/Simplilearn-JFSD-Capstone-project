package movietcktbooking.com.repository;

import java.time.LocalDate;

import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import movietcktbooking.com.entity.Show;


@Repository
public interface ShowRepository extends JpaRepository<Show, Integer> {
	// Modified query to fetch Show along with Theatre and Movie details
	@Query("SELECT s FROM Show s JOIN FETCH s.theatre t JOIN FETCH s.movie m WHERE t.theatreId = :theatreId AND m.movieId = :movieId AND s.showDate = :showDate AND s.startTime = :startTime")
	Optional<Show> findByTheatreAndMovie(@Param("theatreId") Integer theatreId, 
	                                     @Param("movieId") Integer movieId, 
	                                     @Param("showDate") LocalDate showDate, 
	                                     @Param("startTime") LocalTime startTime);


 // Modified query to fetch all shows along with their related Theatre and Movie details
    @Query("SELECT s FROM Show s JOIN FETCH s.theatre t JOIN FETCH s.movie m")
    List<Show> findAllShowsWithDetails();		


}
