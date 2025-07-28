package nl.smallproject.www.attendanceapp.mappers;

import nl.smallproject.www.attendanceapp.dtos.AttendanceDto;
import nl.smallproject.www.attendanceapp.models.Attendance;
import org.springframework.stereotype.Component;

@Component
public class AttendanceMapper {
    public Attendance toEntity(AttendanceDto attendanceDto) {
        Attendance newAttendance = new Attendance();
        newAttendance.setAttendanceId(attendanceDto.getAttendanceId());
        newAttendance.setAttendanceName(attendanceDto.getAttendanceName());
        newAttendance.setAttendanceDepartment(attendanceDto.getAttendanceDepartment());
        newAttendance.setAttendanceDate(attendanceDto.getAttendanceDate());
        newAttendance.setAttendanceTime(attendanceDto.getAttendanceTime());
        newAttendance.setAttendanceStatus(attendanceDto.getAttendanceStatus());
        return newAttendance;
    }

    public AttendanceDto toDTO(Attendance attendance) {
        AttendanceDto newAttendanceDto = new AttendanceDto();
        newAttendanceDto.setAttendanceId(attendance.getAttendanceId());
        newAttendanceDto.setAttendanceName(attendance.getAttendanceName());
        newAttendanceDto.setAttendanceDepartment(attendance.getAttendanceDepartment());
        newAttendanceDto.setAttendanceDate(attendance.getAttendanceDate());
        newAttendanceDto.setAttendanceTime(attendance.getAttendanceTime());
        newAttendanceDto.setAttendanceStatus(attendance.getAttendanceStatus());
        return newAttendanceDto;
    }
}
