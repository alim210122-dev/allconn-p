package com.alim.allconnp.api.advice;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@AllArgsConstructor
@Builder
@Getter
public class ExceptionMessage {

    private int errorCode;
    private String errorMessage;
}
