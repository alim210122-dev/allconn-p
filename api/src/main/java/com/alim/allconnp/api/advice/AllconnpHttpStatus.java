package com.alim.allconnp.api.advice;

public enum AllconnpHttpStatus {

    UNKNOWN_ERROR(999, "Unknown Exception is occurred");

    private final int code;
    private final String message;

    AllconnpHttpStatus(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public int code() {
        return this.code;
    }

    public String message() {
        return this.message;
    }
}
