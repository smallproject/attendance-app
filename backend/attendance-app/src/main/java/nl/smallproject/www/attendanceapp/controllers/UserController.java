package nl.smallproject.www.attendanceapp.controllers;

import nl.smallproject.www.attendanceapp.dtos.UserDto;
import nl.smallproject.www.attendanceapp.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<UserDto>> getAllUsers() {
        List<UserDto> userDtos = userService.getAllUsers();
        return ResponseEntity.ok(userDtos);
    }

    @PostMapping
    public ResponseEntity<Object> createUser(@RequestBody UserDto userDto) {
        var newUser = userService.createUser(userDto);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/" + newUser.getId())
                .buildAndExpand(newUser)
                .toUri();

        return ResponseEntity.created(location).eTag(String.valueOf(HttpStatus.CREATED.value())).body(newUser);
    }
}
