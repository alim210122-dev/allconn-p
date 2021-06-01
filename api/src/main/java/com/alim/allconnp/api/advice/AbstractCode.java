package com.alim.allconnp.api.advice;

public interface AbstractCode<E extends Enum<E>> {
    Class<E> getDeclaringClass();

    int getCode();

    String getMessage();
}
