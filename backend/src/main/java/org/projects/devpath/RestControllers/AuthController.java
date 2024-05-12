package org.projects.devpath.RestControllers;

import org.projects.devpath.Dto.AuthResponseDto;
import org.projects.devpath.Dto.LoginDto;
import org.projects.devpath.Dto.RegisterDto;
import org.projects.devpath.Entities.Role;
import org.projects.devpath.Entities.User;
import org.projects.devpath.Repositories.RoleRepository;
import org.projects.devpath.Repositories.UserRepository;
import org.projects.devpath.Security.JwtGenerator;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private AuthenticationManager authenticationManager;
    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;

    private JwtGenerator jwtGenerator;

    public AuthController(AuthenticationManager authenticationManager, UserRepository userRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder, JwtGenerator jwtGenerator) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtGenerator = jwtGenerator;
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponseDto> login(@RequestBody LoginDto loginDto){
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginDto.getUsername(),
                            loginDto.getPassword()
                    )
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);
            String token = jwtGenerator.generateToken(authentication);
            return ResponseEntity.ok(new AuthResponseDto(token));
        } catch (AuthenticationException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }


    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterDto registerDto) {

            if (userRepository.existsByUsername(registerDto.getUsername())) {
                return new ResponseEntity<>("Username is taken!", HttpStatus.BAD_REQUEST);
            }

            Optional<Role> optionalRole = roleRepository.findByName("USER");
            if (optionalRole.isEmpty()) {
                return new ResponseEntity<>("Role 'USER' not found!", HttpStatus.BAD_REQUEST);
            }

            User user = new User();
            user.setUsername(registerDto.getUsername());
            user.setPassword(passwordEncoder.encode(registerDto.getPassword()));

            Role role = optionalRole.get();
            user.getRoles().add(role);


            userRepository.save(user);

            return new ResponseEntity<>("{\"message\": \"User registered successfully!\"}", HttpStatus.OK);

    }



}
