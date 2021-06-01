package com.alim.starter.healthcheck.healthchecker;

import java.util.concurrent.atomic.AtomicReference;
import org.springframework.boot.actuate.health.Health;

public class MemoryHealthChecker implements HealthChecker {

    private final AtomicReference<Health> health = new AtomicReference<>(Health.up().build());

    @Override
    public void down() {
        health.set(Health.down().build());
    }

    @Override
    public void up() {
        health.set(Health.up().build());
    }

    @Override
    public Health get() {
        return health.get();
    }
}
