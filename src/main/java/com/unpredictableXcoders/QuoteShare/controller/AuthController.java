package com.unpredictableXcoders.QuoteShare.controller;

import com.unpredictableXcoders.QuoteShare.dto.RegisterRequest;
import com.unpredictableXcoders.QuoteShare.dto.RegisterResponse;
import com.unpredictableXcoders.QuoteShare.service.AuthService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    /**
     * Redirect user to Google OAuth2 login
     */
    @GetMapping("/google")
    public void redirectToGoogle(HttpServletResponse response) throws IOException {
        response.sendRedirect("/oauth2/authorization/google");
        System.out.println("Redirected to Google auth endpoint");
    }

    /**
     * Returns currently logged-in Google user information
     */
    @GetMapping("/me")
    public ResponseEntity<Map<String, String>> me(@AuthenticationPrincipal OAuth2User user) {

        if (user == null) {
            return ResponseEntity.status(401).build();
        }

        Map<String, String> info = new HashMap<>();
        info.put("name", user.getAttribute("name"));
        info.put("email", user.getAttribute("email"));
        info.put("picture", user.getAttribute("picture"));

        return ResponseEntity.ok(info);
    }

    /**
     * Register a new LOCAL user
     */
    @PostMapping("/register")
    public ResponseEntity<RegisterResponse> register(@RequestBody RegisterRequest request)
    {
        RegisterResponse response = authService.register(request);
        return ResponseEntity.ok(response);
    }
}