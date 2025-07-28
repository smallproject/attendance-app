package nl.smallproject.www.attendanceapp.controllers;

import nl.smallproject.www.attendanceapp.dtos.AttendanceDto;
import nl.smallproject.www.attendanceapp.services.AttendanceService;
import nl.smallproject.www.attendanceapp.services.UserService;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/attendance")
public class AttendanceController {
    private final AttendanceService attendanceService;

    public AttendanceController(AttendanceService attendanceService) {
        this.attendanceService = attendanceService;
    }

    @PostMapping
    public ResponseEntity<Object> createAttendance(@RequestBody AttendanceDto attendanceDto) {
        var newAttendance = attendanceService.createAttendance(attendanceDto);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/" + newAttendance.getId())
                .buildAndExpand(newAttendance)
                .toUri();

        return ResponseEntity.created(location).eTag(String.valueOf(HttpStatus.CREATED)).body(newAttendance);
    }

    @GetMapping
    public ResponseEntity<List<AttendanceDto>> getAttendance() {
        List<AttendanceDto> attendanceDtos = attendanceService.getAllAttendance();
        return ResponseEntity.ok(attendanceDtos);
    }

    @GetMapping("{id}")
    public ResponseEntity<AttendanceDto> getAttendanceById(@PathVariable long id) {
        AttendanceDto attendanceDto = attendanceService.getAttendanceById(id);
        return ResponseEntity.ok(attendanceDto);
    }

    @PutMapping("{id}")
    public ResponseEntity<Object> updateAttendance(@PathVariable long id, @RequestBody AttendanceDto attendanceUpdateDto){
        attendanceService.updateAttendance(id, attendanceUpdateDto);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Object> deleteAttendance(@PathVariable long id) {
        attendanceService.deleteBook(id);
        return ResponseEntity.noContent().build();
    }
}
