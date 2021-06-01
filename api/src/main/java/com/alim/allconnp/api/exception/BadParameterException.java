package com.alim.allconnp.api.exception;

import com.alim.allconnp.api.advice.ErrorCode;

public class BadParameterException extends ApiRuntimeException {
    public BadParameterException(String message) {
        super(message);
        this.setResultCode(ErrorCode.BAD_REQUEST);
        this.setResultMessage(message);
        this.setSuccessful(false);
    }

    public BadParameterException(String message, Throwable cause) {
        super(message, cause);
    }

    public BadParameterException(String message, int code) {
        super(message);
        this.setResultCode(code);
        this.setResultMessage(message);
        this.setSuccessful(false);
    }

    public BadParameterException(String message, ErrorCode code) {
        super(message);
        this.setResultCode(code);
        this.setResultMessage(message);
        this.setSuccessful(false);
    }
}
