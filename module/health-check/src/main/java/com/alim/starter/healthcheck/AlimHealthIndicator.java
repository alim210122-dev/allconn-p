package com.alim.starter.healthcheck;

import org.springframework.boot.actuate.health.Health;
import org.springframework.boot.actuate.health.HealthIndicator;
import org.springframework.context.annotation.Configuration;

@Configuration
public interface AlimHealthIndicator extends HealthIndicator {
	public void deprecatedDown();
	public void deprecatedUp();
	public Health deprecatedCheck();

	public void up();
	public void down();

	public void healthDown();
	public void healthUp();
}
