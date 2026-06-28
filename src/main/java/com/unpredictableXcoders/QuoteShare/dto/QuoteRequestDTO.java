package com.unpredictableXcoders.QuoteShare.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class QuoteRequestDTO {
    @NotBlank(message = "Quote is required")
    @Size(max = 300, message = "Quote cannot exceed 300 characters")
    private String quote;
    @NotBlank(message = "Author is required")
    @Size(max = 100, message = "Author cannot exceed 100 characters")
    private String author;
}
