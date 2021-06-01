package com.alim.starter.healthcheck.healthchecker;

import java.io.File;
import java.io.IOException;
import java.io.UncheckedIOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import lombok.NonNull;
import org.springframework.boot.actuate.health.Health;

public class FileHealthChecker implements HealthChecker {

    private final Path filePath;
    private static final Health UP = Health.up().build();
    private static final Health DOWN = Health.down().build();

    public FileHealthChecker(@NonNull String filePath) {
        this.filePath = Paths.get(filePath);
    }

    @Override
    public Health get() {
        return Files.exists(filePath) ? DOWN : UP;
    }

    @Override
    public void up() {
        try {
            Files.deleteIfExists(filePath);
        } catch (IOException e) {
            throw new UncheckedIOException(e.getMessage(), e);
        }
    }

    @Override
    public void down() {
        try {
            File file = filePath.toFile();
            if (!file.exists()) {
                Files.createFile(filePath);
            }
        } catch (IOException e) {
            throw new UncheckedIOException(e.getMessage(), e);
        }
    }
}
