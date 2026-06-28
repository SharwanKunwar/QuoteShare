package com.unpredictableXcoders.QuoteShare.service;

import com.unpredictableXcoders.QuoteShare.dto.QuoteRequestDTO;
import com.unpredictableXcoders.QuoteShare.dto.QuoteResponseDTO;
import com.unpredictableXcoders.QuoteShare.entity.QuoteEntity;
import com.unpredictableXcoders.QuoteShare.mapper.QuoteMapper;
import com.unpredictableXcoders.QuoteShare.repository.QuoteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
@RequiredArgsConstructor
public class QuoteServiceIMP implements QuoteServiceHelper{
    private final QuoteRepository repository;
    private final QuoteMapper mapper;

    @Override
    public QuoteResponseDTO addQuote(QuoteRequestDTO request) {
        QuoteEntity quote = mapper.mapToEntity(request);
        QuoteEntity savedQuote = repository.save(quote);
        return mapper.mapToResponse(savedQuote);
    }

    @Override
    public List<QuoteResponseDTO> getAllQuotes() {
        List<QuoteEntity> quotes = repository.findAll();
        return quotes.stream().map(mapper::mapToResponse).toList();
    }

    @Override
    public List<QuoteResponseDTO> getAllQuotesByAuthor(String author) {
        List<QuoteEntity> quotes = repository.findByAuthor(author);
        return quotes.stream().map(mapper::mapToResponse).toList();
    }

    @Override
    public void deleteQuote(Long id) {
        QuoteEntity quote = repository.findById(id).orElseThrow(()-> new RuntimeException("Quote with id " + id + " not found"));
        repository.delete(quote);
    }
}
