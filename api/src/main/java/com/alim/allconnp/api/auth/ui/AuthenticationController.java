package com.alim.allconnp.api.auth.ui;

import com.alim.allconnp.api.exception.BadParameterException;
import com.alim.allconnp.api.auth.application.AuthenticationService;
import com.alim.allconnp.api.auth.dto.Login;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.Objects;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/login")
    public void login(@RequestBody Login login, HttpServletRequest httpServletRequest) {
        if (Objects.isNull(login)) {
            throw new BadParameterException("Login Request is null.");
        }

        authenticationService.login(login.getEmail(), login.getPassword());
    }
}
