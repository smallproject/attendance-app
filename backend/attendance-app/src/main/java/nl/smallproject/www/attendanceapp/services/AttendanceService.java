package nl.smallproject.www.attendanceapp.services;

import jakarta.transaction.Transactional;
import nl.smallproject.www.attendanceapp.dtos.AttendanceDto;
import nl.smallproject.www.attendanceapp.mappers.AttendanceMapper;
import nl.smallproject.www.attendanceapp.models.Attendance;
import nl.smallproject.www.attendanceapp.repositories.AttendanceRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AttendanceService {
    private final AttendanceMapper attendanceMapper;
    private final AttendanceRepository attendanceRepository;

    public AttendanceService(AttendanceMapper attendanceMapper, AttendanceRepository attendanceRepository) {
        this.attendanceMapper = attendanceMapper;
        this.attendanceRepository = attendanceRepository;
    }

    public Attendance createAttendance(AttendanceDto attendanceDto) {
        Attendance attendance = attendanceMapper.toEntity(attendanceDto);
        attendanceRepository.save(attendance);
        return attendance;
    }

    public AttendanceDto getAttendanceById(long id) {
        Optional<Attendance> attendance = Optional.ofNullable(attendanceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Attendance not found with this id: " + id)));

        if (!attendance.isPresent()) {
            throw new RuntimeException("Attendance not found with this id: " + id);
        }
        return attendanceMapper.toDTO(attendance.get());
    }

    public List<AttendanceDto> getAllAttendance() {
        List<Attendance> attendances = attendanceRepository.findAll();
        List<AttendanceDto> attendanceDtos = new ArrayList<>();
        for (Attendance attendanceL: attendances) {
            attendanceDtos.add(attendanceMapper.toDTO(attendanceL));
        }

        return attendanceDtos;
    }

    @Transactional
    public void deleteBook(long id) {
        attendanceRepository.deleteById(id);
    }

    @Transactional
    public void updateAttendance(long id, AttendanceDto attendanceUpdateDto) {
        Attendance existingAttendance = attendanceRepository.getReferenceById(id);
        Attendance updatedAttendance = attendanceMapper.toEntity(attendanceUpdateDto);
        BeanUtils.copyProperties(updatedAttendance, existingAttendance, "id");
        attendanceRepository.save(existingAttendance);
    }
}
