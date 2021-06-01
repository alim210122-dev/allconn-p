package com.alim.starter.requestloggingfilter;

import com.alim.starter.requestloggingfilter.condition.*;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Configuration
@ConditionalOnWebApplication
@ConditionalOnProperty(value = "alim.request-logging-filter.enabled", havingValue = "true", matchIfMissing = true)
public class AlimRequestLoggingFilterAutoConfiguration {

    @Bean
    @ConfigurationProperties(prefix = "alim.request-logging-filter")
    public AlimRequestLoggingFilterProperties alimRequestLoggingFilterProperties() {
        return new AlimRequestLoggingFilterProperties();
    }

    @Bean
    @ConditionalOnMissingBean
    public AlimRequestLoggingFilterCondition responseStatusCondition(AlimRequestLoggingFilterProperties properties) {

        List<AlimRequestLoggingFilterCondition> conditions = new ArrayList<>();

        AlimRequestLoggingFilterProperties.AlimRequestLoggingFilterConditionProperties conditionProperties = properties.getConditions();

        if (conditionProperties.getLoggableHttpStatus() != null) {
            conditions.add(new ResponseStatusCondition(conditionProperties.getLoggableHttpStatus()));
        }

        if (!CollectionUtils.isEmpty(conditionProperties.getExcludeUriPatterns())) {
            conditions.add(new ExcludeUriCondition(conditionProperties.getExcludeUriPatterns()));
        }

        if (!CollectionUtils.isEmpty(conditionProperties.getIncludeUriPatterns())) {
            conditions.add(new IncludeUriCondition(conditionProperties.getIncludeUriPatterns()));
        }

        return new CompositeFilterCondition(conditions);
    }

    @Bean
    public FilterRegistrationBean<AlimRequestLoggingFilter> alimRequestLoggingFilterFilterRegistrationBean(
        AlimRequestLoggingFilterProperties properties, AlimRequestLoggingFilterCondition condition) {
        return new FilterRegistrationBean<>(new AlimRequestLoggingFilter(properties, condition));
    }
}
