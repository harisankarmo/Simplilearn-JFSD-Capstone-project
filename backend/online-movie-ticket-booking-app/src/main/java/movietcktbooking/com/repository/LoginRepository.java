package movietcktbooking.com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import movietcktbooking.com.entity.User;

@Repository
public interface LoginRepository extends JpaRepository<User, String> {

}
