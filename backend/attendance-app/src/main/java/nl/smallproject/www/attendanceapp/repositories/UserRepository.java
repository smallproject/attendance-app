package nl.smallproject.www.attendanceapp.repositories;

import nl.smallproject.www.attendanceapp.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
