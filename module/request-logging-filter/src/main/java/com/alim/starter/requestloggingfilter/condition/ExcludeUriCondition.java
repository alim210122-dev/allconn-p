package com.alim.starter.requestloggingfilter.condition;

import java.util.Collections;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.NonNull;
import org.springframework.util.AntPathMatcher;

public class ExcludeUriCondition implements AlimRequestLoggingFilterCondition {

    private static final AntPathMatcher pathMatcher = new AntPathMatcher();
    private final List<String> excludeUriPatterns;

    public ExcludeUriCondition(@NonNull List<String> uri) {
        this.excludeUriPatterns = Collections.unmodifiableList(uri);
    }

    @Override
    public boolean shouldLog(HttpServletRequest request, HttpServletResponse response) {
        return excludeUriPatterns.stream().noneMatch(pattern -> pathMatcher.match(pattern, request.getRequestURI()));
    }
}
