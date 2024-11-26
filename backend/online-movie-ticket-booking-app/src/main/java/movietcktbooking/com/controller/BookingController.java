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

import movietcktbooking.com.entity.Booking;

import movietcktbooking.com.service.BookingService;

@RestController
@RequestMapping("bookings")
@CrossOrigin
public class BookingController {
	
	@Autowired
	BookingService bs;
	
	@PostMapping(value = "add", consumes = MediaType.APPLICATION_JSON_VALUE)	
	public String storeBooking(@RequestBody Booking booking) {
		return bs.storeBooking(booking);
		
	}
	
	@GetMapping(value = "list", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Booking> findAll() {
		return bs.findAllBookings();
	}	

}
