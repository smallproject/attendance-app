package nl.smallproject.www.attendanceapp.controllers;

import nl.smallproject.www.attendanceapp.dtos.UserDto;
import nl.smallproject.www.attendanceapp.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
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
