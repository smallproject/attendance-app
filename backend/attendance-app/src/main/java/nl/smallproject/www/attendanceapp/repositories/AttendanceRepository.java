package nl.smallproject.www.attendanceapp.repositories;

import nl.smallproject.www.attendanceapp.models.Attendance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AttendanceRepository extends JpaRepository<Attendance, Long> {
}
