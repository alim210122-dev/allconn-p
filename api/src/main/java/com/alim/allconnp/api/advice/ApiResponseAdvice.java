package com.alim.allconnp.api.advice;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

public class ApiResponseAdvice<T> {

    private ApiHeaderAdvice header = new ApiHeaderAdvice();
    private T data = null;

    public ApiResponseAdvice() {
    }

    public ApiResponseAdvice(T data) {
        this.data = data;
    }

    public ApiResponseAdvice(ApiHeaderAdvice header, T data) {
        this.header = header;
        this.data = data;
    }

    public ApiHeaderAdvice getHeader() {
        return header;
    }

    public void setHeader(ApiHeaderAdvice header) {
        this.header = header;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.JSON_STYLE)
                .append("header", header)
                .append("data", data)
                .toString();
    }
}
