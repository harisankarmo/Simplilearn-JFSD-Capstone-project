package movietcktbooking.com.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "bookings")
public class Booking {
	@Id
	@Column(name = "booking_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer bookingId;
	
	@Column(name = "user_id", nullable = true)
	private Integer userId;
	
	@Column(name = "cusromer_email", nullable  = false)
	private String customerEmail;
	
	@Column(name = "cusromer_name", nullable  = false)
	private String customerName;
	
	@Column(name = "cusromer_phone_no", nullable  = false)
	private String customerPhoneNumber;
	
	@ManyToOne
    @JoinColumn(name = "show_id", nullable = false)	
	private Show show;
	
	@Column(name = "booking_date", nullable = false)
	private LocalDate bookingDate;
	
	@Column(name = "total_price", nullable = false)
	private BigDecimal totalPrice;
	
	@Column(name  = "no_of_tickets", nullable = false)
	private Integer noOfTickets;
	
	@Column(name = "status", nullable = false, columnDefinition = "enum('confirmed', 'payment pending', 'cancelled')")
	private String status;

	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Booking(Integer bookingId, Integer userId, String customerEmail, String customerName,
			String customerPhoneNumber, Show show, LocalDate bookingDate, BigDecimal totalPrice, Integer noOfTickets,
			String status) {
		super();
		this.bookingId = bookingId;
		this.userId = userId;
		this.customerEmail = customerEmail;
		this.customerName = customerName;
		this.customerPhoneNumber = customerPhoneNumber;
		this.show = show;
		this.bookingDate = bookingDate;
		this.totalPrice = totalPrice;
		this.noOfTickets = noOfTickets;
		this.status = status;
	}

	public Integer getBookingId() {
		return bookingId;
	}

	public void setBookingId(Integer bookingId) {
		this.bookingId = bookingId;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getCustomerEmail() {
		return customerEmail;
	}

	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getCustomerPhoneNumber() {
		return customerPhoneNumber;
	}

	public void setCustomerPhoneNumber(String customerPhoneNumber) {
		this.customerPhoneNumber = customerPhoneNumber;
	}

	public Show getShow() {
		return show;
	}

	public void setShow(Show show) {
		this.show = show;
	}

	public LocalDate getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(LocalDate bookingDate) {
		this.bookingDate = bookingDate;
	}

	public BigDecimal getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(BigDecimal totalPrice) {
		this.totalPrice = totalPrice;
	}

	public Integer getNoOfTickets() {
		return noOfTickets;
	}

	public void setNoOfTickets(Integer noOfTickets) {
		this.noOfTickets = noOfTickets;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}	
	
	

}
