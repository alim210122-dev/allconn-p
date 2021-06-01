package com.alim.allconnp.api.exception;

import com.alim.allconnp.api.advice.ErrorCode;

public class ApiRuntimeException extends RuntimeException {

    private boolean successful;
    private int resultCode;
    private String resultMessage;

    public ApiRuntimeException(String message) {
        super(message);
        this.successful = false;
        this.resultCode = 500;
        this.resultMessage = message;
    }

    public ApiRuntimeException(String message, Throwable cause) {
        super(message, cause);
        this.successful = false;
        this.resultCode = 500;
        this.resultMessage = message;
    }

    public ApiRuntimeException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.successful = false;
        this.resultCode = errorCode.getCode();
        this.resultMessage = errorCode.getMessage();
    }

    public ApiRuntimeException(Throwable cause) {
        super(cause);
    }

    public boolean isSuccessful() {
        return successful;
    }

    public void setSuccessful(boolean successful) {
        this.successful = successful;
    }

    public int getResultCode() {
        return resultCode;
    }

    public void setResultCode(int resultCode) {
        this.resultCode = resultCode;
    }

    public void setResultCode(ErrorCode errorCode) {
        this.resultCode = errorCode.getCode();
    }


    public String getResultMessage() {
        return resultMessage;
    }

    public void setResultMessage(String resultMessage) {
        this.resultMessage = resultMessage;
    }
}
