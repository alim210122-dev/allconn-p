package com.alim.allconnp.api.config.handler;

import com.alim.allconnp.api.constants.AuthConstants;
import com.alim.allconnp.api.user.domain.MyUserDetails;
import com.alim.allconnp.api.utils.TokenUtils;
import com.alim.allconnp.domain.entity.User;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class CustomLoginSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler {

    @Override
    public void onAuthenticationSuccess(final HttpServletRequest request, final HttpServletResponse response,
                                        final Authentication authentication) {
        final User user = ((MyUserDetails) authentication.getPrincipal()).getUser();
        final String token = TokenUtils.generateJwtToken(user);
        response.addHeader(AuthConstants.AUTH_HEADER, AuthConstants.TOKEN_TYPE + " " + token);
    }

}