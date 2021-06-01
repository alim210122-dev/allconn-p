package com.alim.allconnp.api.advice;

import com.alim.allconnp.api.exception.ApiRuntimeException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.MethodParameter;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseBodyAdvice;

@Slf4j
@RequiredArgsConstructor
@RestControllerAdvice(basePackages = {"com.alim.allconnp.api"})
public class GlobalControllerAdvice implements ResponseBodyAdvice<Object> {

    private final ObjectMapper objectMapper;

    @Override
    public boolean supports(MethodParameter methodParameter, Class<? extends HttpMessageConverter<?>> aClass) {
        return true;
    }

    @Override
    public Object beforeBodyWrite(Object body, MethodParameter methodParameter, MediaType mediaType, Class<? extends HttpMessageConverter<?>> aClass, ServerHttpRequest serverHttpRequest,
                                  ServerHttpResponse serverHttpResponse) {
        if (!(body instanceof ApiResponseAdvice)) {
            ApiResponseAdvice<Object> apiResponseAdvice = new ApiResponseAdvice<>();
            apiResponseAdvice.setData(body);

            if (body instanceof Exception) {
                if (body instanceof ApiRuntimeException) {
                    apiResponseAdvice.setHeader(new ApiHeaderAdvice((ApiRuntimeException) body));
                } else {
                    ApiHeaderAdvice apiHeaderAdvice = new ApiHeaderAdvice(false, 500, ((Exception) body).getMessage());
                    apiResponseAdvice.setHeader(apiHeaderAdvice);
                }
                apiResponseAdvice.setData(null);
            }

            if (body instanceof String) {
                try {
                    serverHttpResponse.getHeaders().setContentType(MediaType.APPLICATION_JSON);

                    return objectMapper.writeValueAsString(apiResponseAdvice);
                } catch (JsonProcessingException e) {
                    log.error("Error when processing response body to JSON format: {}", body, e);

                    apiResponseAdvice.setData(null);
                    return apiResponseAdvice;
                }
            }

            return apiResponseAdvice;
        }

        return body;
    }
}
