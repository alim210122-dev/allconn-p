package com.alim.starter.requestloggingfilter.condition;

import java.util.Collections;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class CompositeFilterCondition implements AlimRequestLoggingFilterCondition {

    private final List<AlimRequestLoggingFilterCondition> conditions;

    public CompositeFilterCondition(List<AlimRequestLoggingFilterCondition> conditions) {
        this.conditions = Collections.unmodifiableList(conditions);
    }

    @Override
    public boolean shouldLog(HttpServletRequest request, HttpServletResponse response) {
        return conditions.stream().allMatch(condition -> condition.shouldLog(request, response));
    }
}
