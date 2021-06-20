package com.alim.allconnp.domain.repository;

import com.alim.allconnp.domain.entity.Employee;
import com.querydsl.jpa.impl.JPAQueryFactory;

import java.util.List;

import static com.alim.allconnp.domain.entity.QEmployee.employee;

public class EmployeeRepositoryImpl implements EmployeeRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    private EmployeeRepositoryImpl(final JPAQueryFactory jpaQueryFactory) {
        this.jpaQueryFactory = jpaQueryFactory;
    }

    @Override
    public List<Employee> findByCompanyCode(String companyCode) {
        return jpaQueryFactory.selectFrom(employee)
                .where(employee.employeeId.companyCode.eq(companyCode))
                .fetch();
    }
}