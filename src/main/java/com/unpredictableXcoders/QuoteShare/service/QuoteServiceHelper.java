package com.unpredictableXcoders.QuoteShare.service;

import com.unpredictableXcoders.QuoteShare.dto.QuoteRequestDTO;
import com.unpredictableXcoders.QuoteShare.dto.QuoteResponseDTO;
import com.unpredictableXcoders.QuoteShare.entity.QuoteEntity;

import java.util.List;

public interface QuoteServiceHelper {

    QuoteResponseDTO addQuote(QuoteRequestDTO request);
    List<QuoteResponseDTO> getAllQuotes();
    List<QuoteResponseDTO> getAllQuotesByAuthor(String author);
    void deleteQuote(Long id);
}
