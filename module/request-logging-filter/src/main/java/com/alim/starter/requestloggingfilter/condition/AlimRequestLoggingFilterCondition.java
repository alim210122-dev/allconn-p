package com.alim.starter.requestloggingfilter.condition;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public interface AlimRequestLoggingFilterCondition {

    boolean shouldLog(HttpServletRequest request, HttpServletResponse response);
}
