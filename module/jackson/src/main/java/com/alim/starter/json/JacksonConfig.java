package com.alim.starter.json;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.databind.cfg.MapperConfig;
import com.fasterxml.jackson.databind.introspect.AnnotatedMethod;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.math.NumberUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;
import org.springframework.stereotype.Component;

@Component
public class JacksonConfig {

    @Bean
    public ObjectMapper objectMapper() {
        return Jackson2ObjectMapperBuilder.json()
                                          .serializationInclusion(Include.ALWAYS)
                                          .featuresToDisable(MapperFeature.SORT_PROPERTIES_ALPHABETICALLY)
                                          .featuresToDisable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES)
                                          .featuresToEnable(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY)
                                          .featuresToDisable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS)
                                          .propertyNamingStrategy(new PropertyNamingStrategy() {
                                              public String nameForGetterMethod(MapperConfig<?> config, AnnotatedMethod method, String defaultName) {
                                                  return method.hasReturnType() && (method.getRawReturnType() == Boolean.class || method.getRawReturnType() == Boolean.TYPE) && method.getName().startsWith("is") ? method.getName() : super.nameForGetterMethod(config, method, defaultName);
                                              }

                                              public String nameForSetterMethod(MapperConfig<?> config, AnnotatedMethod method, String defaultName) {
                                                  return this.isSetterForBoolean(method) ? "is" + StringUtils.capitalize(defaultName) : super.nameForSetterMethod(config, method, defaultName);
                                              }

                                              private boolean isSetterForBoolean(AnnotatedMethod method) {
                                                  return (method.getParameterCount() == NumberUtils.INTEGER_ONE
                                                          && (method.getRawParameterType(NumberUtils.INTEGER_ZERO) == Boolean.class || method.getRawParameterType(NumberUtils.INTEGER_ZERO) == Boolean.TYPE))
                                                          && (!method.getName().startsWith("is"));
                                              }
                                          })
                                          .build();
    }
}
