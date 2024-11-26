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
import lombok.Data;


@Entity

@Table(name = "users")
@Data
public class User {
	
	@Override
	public String toString() {
		return "User [userId=" + userId + ", email=" + email + ", name=" + name + ", password=" + password + ", role="
				+ role + "]";
	}


	public User() {
		super();
		// TODO Auto-generated constructor stub
	}


	public User(Integer userId, String email, String name, String password, String role) {
		super();
		this.userId = userId;
		this.email = email;
		this.name = name;
		this.password = password;
		this.role = role;
	}


	public Integer getUserId() {
		return userId;
	}


	public void setUserId(Integer userId) {
		this.userId = userId;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) //Auto-incremented primary key
	@Column(name = "user_id")
	private Integer userId;
	
	@OneToMany
	@JoinColumn(name = "user_id")
	private List<Booking> listofbookings;
	
	@Column(name = "email", nullable = false, unique = true)
	private String email;
	
	@Column(name = "name", nullable = false)
	private String name;
	
	@Column(name = "password", nullable = false)
	private String password;
	
	
	@Column(name = "role", nullable = false)
	private String role;
	
	
}
