package com.alim.starter.healthcheck.healthchecker;

import org.springframework.boot.actuate.health.Health;

public interface HealthChecker {

    Health get();
    void up();
    void down();
}
