package com.alim.allconnp.domain.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.repository.NoRepositoryBean;

public class EmployeeRepositoryImpl implements EmployeeRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    private EmployeeRepositoryImpl(final JPAQueryFactory jpaQueryFactory) {
        this.jpaQueryFactory = jpaQueryFactory;
    }
}
