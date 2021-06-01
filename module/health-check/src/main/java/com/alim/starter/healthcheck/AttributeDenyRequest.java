package com.alim.starter.healthcheck;

import java.util.HashSet;
import java.util.Set;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.CollectionUtils;

@Slf4j
public class AttributeDenyRequest extends HttpServletRequestWrapper {

    private final Set<String> denyList;

    public AttributeDenyRequest(HttpServletRequest request, Set<String> denyList) {
        super(request);
        this.denyList = CollectionUtils.isEmpty(denyList) ? new HashSet<>(0) : denyList;
    }

    @Override
    public void setAttribute(String name, Object o) {

        if (denyList.contains(name)) {
            log.info("denied request attribute: {} - ", name, o);
            return;
        }

        super.setAttribute(name, o);
    }
}
