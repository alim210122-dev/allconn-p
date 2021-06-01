package com.alim.allconnp.api.advice;

import com.alim.allconnp.api.exception.ApiRuntimeException;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

public class ApiHeaderAdvice {

    private boolean isSuccessful;
    private Integer resultCode;
    private String resultMessage;

    public ApiHeaderAdvice() {
        isSuccessful = true;
        resultCode = 0;
        resultMessage = "SUCCESS";
    }

    public ApiHeaderAdvice(boolean successful, int resultCode, String resultMessage) {
        this.isSuccessful = successful;
        this.resultCode = resultCode;
        this.resultMessage = resultMessage;
    }

    public ApiHeaderAdvice(ApiRuntimeException apiRuntimeException) {
        this.isSuccessful = apiRuntimeException.isSuccessful();
        this.resultCode = apiRuntimeException.getResultCode();
        this.resultMessage = apiRuntimeException.getResultMessage();
    }

    @JsonProperty(value = "isSuccessful")
    public boolean isSuccessful() {
        return isSuccessful;
    }

    public void setSuccessful(boolean successful) {
        this.isSuccessful = successful;
    }

    public int getResultCode() {
        return resultCode;
    }

    public void setResultCode(int resultCode) {
        this.resultCode = resultCode;
    }

    public String getResultMessage() {
        return resultMessage;
    }

    public void setResultMessage(String resultMessage) {
        this.resultMessage = resultMessage;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.JSON_STYLE)
                .append("isSuccessful", isSuccessful)
                .append("resultCode", resultCode)
                .append("resultMessage", resultMessage)
                .toString();
    }
}