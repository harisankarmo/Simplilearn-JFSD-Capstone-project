package movietcktbooking.com.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import movietcktbooking.com.entity.Booking;

import movietcktbooking.com.repository.BookingRepository;

@Service
public class BookingService {
	
	@Autowired	
	BookingRepository bookingRepo;
	
	public String storeBooking(Booking booking) {
        
		bookingRepo.save(booking);
        return "Booking data saved successfully";
    
    }

    public List<Booking> findAllBookings() {
        return bookingRepo.findAllBookings();
    }

}
