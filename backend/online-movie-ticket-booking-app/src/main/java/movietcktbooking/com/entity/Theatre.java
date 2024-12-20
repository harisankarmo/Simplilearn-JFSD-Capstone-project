package movietcktbooking.com.entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

@Entity

@Table(name = "theatres", uniqueConstraints = @UniqueConstraint(columnNames = {"name", "location"}))

public class Theatre {
	
	@Id
	@Column(name = "theatre_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer theatreId;
	
	@OneToMany
	@JoinColumn(name = "theatre_id")
	private List<Show> listofshows;	
	
	private String name;
	private String location;
	private String capacity;
	
	
	public Theatre() {
		super();
		// TODO Auto-generated constructor stub
	}	
	
	
	public Theatre(Integer theatreId, String name, String location, String capacity) {
		super();
		this.theatreId = theatreId;
		this.name = name;
		this.location = location;
		this.capacity = capacity;
	}


	public Integer getTheatreId() {
		return theatreId;
	}


	public void setTheatreId(Integer theatreId) {
		this.theatreId = theatreId;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getLocation() {
		return location;
	}



	public void setLocation(String location) {
		this.location = location;
	}


	public String getCapacity() {
		return capacity;
	}


	public void setCapacity(String capacity) {
		this.capacity = capacity;
	}


	@Override
	public String toString() {
		return "Theatre [theatreId=" + theatreId + ", name=" + name + ", location=" + location + ", capacity="
				+ capacity + "]";
	}	

}
