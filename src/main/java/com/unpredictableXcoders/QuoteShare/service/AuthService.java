package com.unpredictableXcoders.QuoteShare.service;

import com.unpredictableXcoders.QuoteShare.dto.RegisterRequest;
import com.unpredictableXcoders.QuoteShare.dto.RegisterResponse;
import com.unpredictableXcoders.QuoteShare.entity.AuthProvider;
import com.unpredictableXcoders.QuoteShare.entity.User;
import com.unpredictableXcoders.QuoteShare.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;

    public RegisterResponse register(RegisterRequest request) {

        if (repository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists.");
        }

        User user = User.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .authProvider(AuthProvider.LOCAL)
                .build();

        repository.save(user);

        return new RegisterResponse("Registration Successful");
    }
}