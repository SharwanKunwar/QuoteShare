package com.unpredictableXcoders.QuoteShare.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class QuoteResponseDTO {
    private Long id;
    private String quote;
    private String author;
    private LocalDateTime createdAt;
}
