package com.alim.starter.requestloggingfilter.condition;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ResponseStatusCondition implements AlimRequestLoggingFilterCondition {

    private final int status;

    public ResponseStatusCondition(int status) {
        this.status = status;
    }

    @Override
    public boolean shouldLog(HttpServletRequest request, HttpServletResponse response) {
        return response.getStatus() >= status;
    }
}
