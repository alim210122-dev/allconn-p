package com.alim.allconnp.api.advice;

public enum ErrorCode implements AbstractCode<ErrorCode> {
    BAD_REQUEST(400, "BAD REQUEST"),
    UNAUTHORIZED(401, "UNAUTHORIZED"),
    ACCESS_DENIED(403, "ACCESS DENIED"),
    SESSION_EXPIRED(512, "SESSION EXPIRED");

    ErrorCode(int code, String message) {
        this.code = code;
        this.message = message;
    }

    private final int code;
    private final String message;

    public int getCode() {
        return this.code;
    }

    @Override
    public String getMessage() {
        return message;
    }
}
