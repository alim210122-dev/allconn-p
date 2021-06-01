package com.alim.starter.requestloggingfilter.condition;

import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.NonNull;
import org.springframework.util.AntPathMatcher;

public class IncludeUriCondition implements AlimRequestLoggingFilterCondition {

    private static final AntPathMatcher pathMatcher = new AntPathMatcher();
    private final List<String> includeUriPatterns;

    public IncludeUriCondition(@NonNull List<String> includeUriPatterns) {
        this.includeUriPatterns = includeUriPatterns;
    }


    @Override
    public boolean shouldLog(HttpServletRequest request, HttpServletResponse response) {
        return includeUriPatterns.stream().anyMatch(pattern -> pathMatcher.match(pattern, request.getRequestURI()));
    }
}
