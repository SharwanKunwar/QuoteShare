package com.unpredictableXcoders.QuoteShare.repository;

import com.unpredictableXcoders.QuoteShare.entity.QuoteEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuoteRepository extends JpaRepository<QuoteEntity, Long> {
    List<QuoteEntity> findByAuthor(String author);
}
