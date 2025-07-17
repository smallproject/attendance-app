package nl.smallproject.www.attendanceapp.services;

import nl.smallproject.www.attendanceapp.dtos.UserDto;
import nl.smallproject.www.attendanceapp.mappers.UserMapper;
import nl.smallproject.www.attendanceapp.models.User;
import nl.smallproject.www.attendanceapp.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public UserService(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    public User createUser(UserDto userDto) {
        User user = userMapper.toEntity(userDto);
        userRepository.save(user);
        return user;
    }

    public List<UserDto> getAllUsers() {
        List<User> users = userRepository.findAll();
        List<UserDto> userDtos = new ArrayList<>();
        for (User user : users) {
            userDtos.add(userMapper.toDTO(user));
        }
        return userDtos;
    }
}
