package nl.smallproject.www.attendanceapp.mappers;

import nl.smallproject.www.attendanceapp.dtos.UserDto;
import nl.smallproject.www.attendanceapp.models.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {
    public User toEntity(UserDto userDto) {
        User newUser = new User();
        newUser.setUsername(userDto.getUsername());
        newUser.setPassword(userDto.getPassword());
        newUser.setFirstname(userDto.getFirstname());
        newUser.setLastname(userDto.getLastname());
        newUser.setEmail(userDto.getEmail());
        newUser.setDepartment(userDto.getDepartment());
        return newUser;
    }
}
