package com.alim.allconnp.api.advice;

import com.alim.allconnp.api.exception.ApiRuntimeException;
import com.alim.allconnp.api.exception.BadParameterException;
import com.alim.allconnp.api.exception.SessionExpiredException;
import com.alim.allconnp.api.exception.UnauthenticatedException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletRequest;

@RestControllerAdvice
public class GlobalExceptionHandler {

    private static final Logger LOGGER = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(Exception.class)
    public ApiRuntimeException internalException(HttpServletRequest request, Exception e) {
        printLog(request, e);
        return new ApiRuntimeException("Unknown Exception is occurred");
    }

    @ExceptionHandler(RuntimeException.class)
    public ApiRuntimeException runtimeExceptionError(HttpServletRequest request, RuntimeException e) {
        printLog(request, e);
        return new ApiRuntimeException("A Runtime Exception is  occurred");
    }

    @ExceptionHandler(ApiRuntimeException.class)
    public ApiRuntimeException apiRuntimeExceptionError(HttpServletRequest request, ApiRuntimeException e) {
        printLog(request, e);
        return e;
    }

    @ExceptionHandler(UnauthenticatedException.class)
    public UnauthenticatedException unauthenticatedException(HttpServletRequest request, UnauthenticatedException e) {
        printLog(request, e);
        return e;
    }

    @ExceptionHandler(BadParameterException.class)
    public BadParameterException unauthenticatedException(HttpServletRequest request, BadParameterException e) {
        printLog(request, e);
        return e;
    }

    @ExceptionHandler(SessionExpiredException.class)
    public SessionExpiredException handleAccessDeniedException(HttpServletRequest request, SessionExpiredException e) {
        printLog(request, e);
        return e;
    }

    private void printLog(HttpServletRequest request, Exception e) {
        LOGGER.error("Exception Error {} \t: {} at URI -> {}", e.getClass(), e.getMessage(), request.getRequestURI(), e);
    }
}
