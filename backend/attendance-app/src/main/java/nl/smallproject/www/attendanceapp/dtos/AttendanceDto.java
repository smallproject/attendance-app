package nl.smallproject.www.attendanceapp.dtos;

public class AttendanceDto {
    private Long attendanceId;
    private String attendanceName;
    private String attendanceDepartment;
    private String attendanceDate;
    private String attendanceTime;
    private String attendanceStatus;

    public Long getAttendanceId() {
        return attendanceId;
    }

    public void setAttendanceId(Long attendanceId) {
        this.attendanceId = attendanceId;
    }

    public String getAttendanceName() {
        return attendanceName;
    }

    public void setAttendanceName(String attendanceName) {
        this.attendanceName = attendanceName;
    }

    public String getAttendanceDepartment() {
        return attendanceDepartment;
    }

    public void setAttendanceDepartment(String attendanceDepartment) {
        this.attendanceDepartment = attendanceDepartment;
    }

    public String getAttendanceDate() {
        return attendanceDate;
    }

    public void setAttendanceDate(String attendanceDate) {
        this.attendanceDate = attendanceDate;
    }

    public String getAttendanceTime() {
        return attendanceTime;
    }

    public void setAttendanceTime(String attendanceTime) {
        this.attendanceTime = attendanceTime;
    }

    public String getAttendanceStatus() {
        return attendanceStatus;
    }

    public void setAttendanceStatus(String attendanceStatus) {
        this.attendanceStatus = attendanceStatus;
    }
}
