package com.alim.allconnp.api.config.interceptor;

import com.alim.allconnp.api.utils.TokenUtils;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Log4j2
public class JwtTokenInterceptor implements HandlerInterceptor {

    private static final String AUTH_HEADER = "Authorization";

    @Override
    public boolean preHandle(final HttpServletRequest request, final HttpServletResponse response, final Object handler) throws IOException {
        final String header = request.getHeader(AUTH_HEADER);

        if (header != null) {
            final String token = TokenUtils.getTokenFromHeader(header);
            if (TokenUtils.isValidToken(token)) {
                return true;
            }
        }
        response.sendRedirect("/error/unauthorized");
        return false;

    }

}