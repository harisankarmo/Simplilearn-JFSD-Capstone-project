package movietcktbooking.com.entity;

import java.time.LocalDate;
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
@Table(name = "movies", uniqueConstraints = @UniqueConstraint(columnNames = {"title", "lang"}))

public class Movie {
	
	@Id
	@Column(name = "movie_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer movieId;
	
	@OneToMany
	@JoinColumn(name = "movie_id")
	private List<Show> listofshows;
	
	@Column(name = "title", nullable = false)
	private String title;
	
	@Column(name = "genre", nullable = false)
	private String genre;
	
	@Column(name = "description", nullable = false, columnDefinition = "text")
	private String description;
	
	@Column(name = "starer", nullable = false, columnDefinition = "text")
	private String starer;
	
	public Movie(Integer movieId, List<Show> listofshows, String title, String genre, String description, String starer,
			String language, String movieImage, LocalDate releaseDate) {
		super();
		this.movieId = movieId;
		this.listofshows = listofshows;
		this.title = title;
		this.genre = genre;
		this.description = description;
		this.starer = starer;
		this.language = language;
		this.movieImage = movieImage;
		this.releaseDate = releaseDate;
	}

	public String getStarer() {
		return starer;
	}

	public void setStarer(String starer) {
		this.starer = starer;
	}

	@Column(name = "lang", nullable = false)
	private String language;
	
	@Column(name = "movie_image", columnDefinition = "longblob")	
	private String movieImage;
	
	@Column(name = "release_date", nullable = false)
	private LocalDate releaseDate;

	public Movie() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	public Integer getMovieId() {
		return movieId;
	}

	public void setMovieId(Integer movieId) {
		this.movieId = movieId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}
	
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getMovieImage() {
		return movieImage;
	}

	public void setMovieImage(String movieImage) {
		this.movieImage = movieImage;
	}

	public LocalDate getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(LocalDate releaseDate) {
		this.releaseDate = releaseDate;
	}

	@Override
	public String toString() {
		return "Movie [movieId=" + movieId + ", title=" + title + ", genre=" + genre + ", language=" + language
				+ ", description=" + description + ", movieImage=" + movieImage + ", releaseDate=" + releaseDate + "]";
	}

	
	
	

}
