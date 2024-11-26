package movietcktbooking.com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import movietcktbooking.com.entity.Booking;
import movietcktbooking.com.entity.Show;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer> {
	
	// Modified query to fetch all shows along with their related Theatre and Movie details
    @Query("SELECT b FROM Booking b JOIN FETCH b.show s")
    List<Booking> findAllBookings();

}
