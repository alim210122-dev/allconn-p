package com.alim.starter.healthcheck;

import java.io.IOException;
import java.util.Set;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.web.filter.OncePerRequestFilter;

public class AttributeDenyRequestFilter extends OncePerRequestFilter {

    private final Set<String> denyList;

    public AttributeDenyRequestFilter(Set<String> denyList) {
        this.denyList = denyList;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        filterChain.doFilter(new AttributeDenyRequest(request, denyList), response);
    }
}