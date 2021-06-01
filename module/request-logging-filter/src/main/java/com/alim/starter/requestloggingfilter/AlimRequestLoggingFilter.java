package com.alim.starter.requestloggingfilter;

import com.alim.starter.requestloggingfilter.condition.AlimRequestLoggingFilterCondition;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.filter.AbstractRequestLoggingFilter;
import org.springframework.web.util.ContentCachingRequestWrapper;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@Getter
@Setter
public class AlimRequestLoggingFilter extends AbstractRequestLoggingFilter {

    private String afterMessagePrefix;
    private String afterMessageSuffix;
    private int loggableHttpStatus;
    private LogLevel logLevel;
    private AlimRequestLoggingFilterCondition condition;

    public AlimRequestLoggingFilter(AlimRequestLoggingFilterProperties properties, AlimRequestLoggingFilterCondition condition) {
        this.setIncludeQueryString(properties.isIncludeQueryString());
        this.setIncludeHeaders(properties.isIncludeHeaders());
        this.setIncludePayload(properties.isIncludePayload());
        this.setIncludeClientInfo(properties.isIncludeClientInfo());
        this.setMaxPayloadLength(properties.getMaxPayloadLength());
        this.setAfterMessagePrefix(properties.getAfterMessagePrefix());
        this.setAfterMessageSuffix(properties.getAfterMessageSuffix());
        this.setLogLevel(properties.getLogLevel());
        this.condition = condition;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        boolean isFirstRequest = !this.isAsyncDispatch(request);
        HttpServletRequest requestToUse = request;
        if (this.isIncludePayload() && isFirstRequest && !(request instanceof ContentCachingRequestWrapper)) {
            requestToUse = new ContentCachingRequestWrapper(request, this.getMaxPayloadLength());
        }

        try {
            filterChain.doFilter(requestToUse, response);
        } finally {
            if (this.shouldLog(requestToUse, response) && !this.isAsyncStarted(requestToUse)) {
                this.afterRequest(requestToUse, this.getAfterMessage(requestToUse));
            }

        }

    }

    protected boolean shouldLog(HttpServletRequest request, HttpServletResponse response) {
        return logLevel.isEnabled(log) && condition.shouldLog(request, response);
    }

    private String getAfterMessage(HttpServletRequest request) {
        return this.createMessage(request, this.getAfterMessagePrefix(), this.afterMessageSuffix);
    }

    @Override
    protected void beforeRequest(HttpServletRequest request, String message) {
        // do nothing
    }

    @Override
    protected void afterRequest(HttpServletRequest request, String message) {
        logLevel.log(log, message);
    }
}
