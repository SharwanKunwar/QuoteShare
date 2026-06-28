package com.unpredictableXcoders.QuoteShare.mapper;

import com.unpredictableXcoders.QuoteShare.dto.QuoteRequestDTO;
import com.unpredictableXcoders.QuoteShare.dto.QuoteResponseDTO;
import com.unpredictableXcoders.QuoteShare.entity.QuoteEntity;
import org.springframework.stereotype.Component;

@Component
public class QuoteMapper {

    // Request DTO -> Entity
    public QuoteEntity mapToEntity(QuoteRequestDTO request) {
        return QuoteEntity.builder()
                .quote(request.getQuote())
                .author(request.getAuthor())
                .build();
    }

    // Entity -> Response DTO
    public QuoteResponseDTO mapToResponse(QuoteEntity entity) {
        return QuoteResponseDTO.builder()
                .id(entity.getId())
                .quote(entity.getQuote())
                .author(entity.getAuthor())
                .createdAt(entity.getCreatedAt())
                .build();
    }
}