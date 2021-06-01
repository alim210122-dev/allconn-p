package com.alim.starter.healthcheck;

import com.alim.starter.healthcheck.healthchecker.FileHealthChecker;
import com.alim.starter.healthcheck.healthchecker.HealthChecker;
import com.alim.starter.healthcheck.healthchecker.MemoryHealthChecker;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.actuate.health.Health;
import org.springframework.boot.actuate.health.Status;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.accept.PathExtensionContentNegotiationStrategy;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;

@Configuration
public class AlimHealthCheckAutoConfiguration {


	@RestController
	public static class AlimSimpleHealthIndicatorChanger {

		private HealthChecker healthChecker;

		public AlimSimpleHealthIndicatorChanger(HealthChecker healthChecker,
		                                         @Value("${alim.health-check.url}") String healthCheckUrl,
		                                         @Value("${management.endpoints.web.base-path:}") String oldBasePath,
		                                         @Value("${management.endpoints.web.path-mapping.health:}") String oldHealth
		) {

			//alim.health-check.url 설정안되어있으면 튕겨야함.
			if (healthCheckUrl != null && healthCheckUrl.isEmpty()) {
				throw new RuntimeException("fail to initialize AlimHealthCheckAutoConfiguration :  alim.health-check.url 설정해주세요.");
			}

			//구버전이 셋팅된경우, url이 겹치면안됨
			String oldUrl = oldBasePath + oldHealth;
			if (healthCheckUrl.equals(oldUrl)) {
				throw new RuntimeException("fail to initialize AlimHealthCheckAutoConfiguration :  구버전설정과 충돌이발생함. " +
						"\n management.endpoints.web.base-path -> 설정을 제거하세요 " +
						"\n management.endpoints.web.path-mapping.health -> 설정을 제거하세요");
			}

			this.healthChecker = healthChecker;
		}

		//신규 - 이전방식 지원
		@PutMapping("${alim.health-check.url}/down")
		public void down() {
			healthChecker.down();
		}

		@PutMapping("${alim.health-check.url}/up")
		public void up() {
			healthChecker.up();
		}

		//신규
		@GetMapping("${alim.health-check.url}")
		public ResponseEntity health() {
			Health health = healthChecker.get();
			if (health.getStatus() != Status.UP) {
				return new ResponseEntity(health, HttpStatus.SERVICE_UNAVAILABLE);
			} else {
				return new ResponseEntity(health, HttpStatus.OK);
			}
		}

		@DeleteMapping("${alim.health-check.url}")
		public void healthDown() {
			healthChecker.down();
		}

		@PutMapping("${alim.health-check.url}")
		public void healthUp() {
			healthChecker.up();
		}
	}

	@Bean
	@ConditionalOnProperty(value = "spring.mvc.contentnegotiation.favor-path-extension", havingValue = "true")
	public FilterRegistrationBean<AttributeDenyRequestFilter> attributeDenyRequestFilterFilter() {
		return new FilterRegistrationBean<>(new AttributeDenyRequestFilter(Collections.singleton(PathExtensionContentNegotiationStrategy.class.getName() + ".SKIP")));
	}

	@Bean
	@ConditionalOnProperty(value = "management.health.type", havingValue = "memory", matchIfMissing = true)
	public HealthChecker memoryHealthChecker() {
		return new MemoryHealthChecker();
	}

	@Bean
	@ConditionalOnProperty(value = "management.health.type", havingValue = "file")
	public HealthChecker fileHealthChecker(@Value("${management.health.file-path}") String filePath) {
		return new FileHealthChecker(filePath);
	}
}

