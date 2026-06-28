package com.unpredictableXcoders.QuoteShare.controller;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @GetMapping("/google")
    public void redirectToGoogle(HttpServletResponse response) throws IOException {
        response.sendRedirect("/oauth2/authorization/google");
        System.out.println("Redirected to Google auth endpoint");
    }

    @GetMapping("/me")
    public ResponseEntity<Map<String, String>> me(@AuthenticationPrincipal OAuth2User user) {
        Map<String, String> info = new HashMap<>();
        info.put("name", user.getAttribute("name"));
        info.put("email", user.getAttribute("email"));
        info.put("picture", user.getAttribute("picture"));
        return ResponseEntity.ok(info);
    }


}
