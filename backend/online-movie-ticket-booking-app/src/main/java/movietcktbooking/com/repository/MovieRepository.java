package movietcktbooking.com.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import movietcktbooking.com.entity.Movie;


@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer> {
	@Query("SELECT m FROM Movie m WHERE m.title = :title AND m.language = :language")
	Optional<Movie> findByTitleAndLang(@Param("title") String title, @Param("language") String language);
}
