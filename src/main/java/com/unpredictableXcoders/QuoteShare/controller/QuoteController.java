package com.unpredictableXcoders.QuoteShare.controller;

import com.unpredictableXcoders.QuoteShare.dto.QuoteRequestDTO;
import com.unpredictableXcoders.QuoteShare.dto.QuoteResponseDTO;
import com.unpredictableXcoders.QuoteShare.service.QuoteServiceHelper;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/quotes")
public class QuoteController {

    private final QuoteServiceHelper service;

    @GetMapping("/test")
    public String test() {
        return "test ok 200";
    }

    @GetMapping("/about")
    public String about() {
        return "This is the about quote";
    }

    @PostMapping
    public QuoteResponseDTO createQuote(@RequestBody QuoteRequestDTO request) {
        return service.addQuote(request);
    }

    @GetMapping
    public List<QuoteResponseDTO> getAllQuotes() {
        return service.getAllQuotes();
    }

    @GetMapping("/author/{author}")
    public List<QuoteResponseDTO> getQuotesByAuthor(@PathVariable String author) {
        return service.getAllQuotesByAuthor(author);
    }

    @DeleteMapping
    public void deleteQuoteById(@PathVariable Long id) {
        service.deleteQuote(id);
    }

}
