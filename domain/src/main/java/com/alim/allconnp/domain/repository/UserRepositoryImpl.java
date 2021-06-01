package com.alim.allconnp.domain.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.repository.NoRepositoryBean;

public class UserRepositoryImpl implements UserRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    private UserRepositoryImpl(final JPAQueryFactory jpaQueryFactory) {
        this.jpaQueryFactory = jpaQueryFactory;
    }
}
