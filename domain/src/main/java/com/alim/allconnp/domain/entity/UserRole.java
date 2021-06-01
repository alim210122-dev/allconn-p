package com.alim.allconnp.domain.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum UserRole {

    USER("USER"),
    ADMIN("ADMIN");

    private final String value;
}