package com.alim.allconnp.domain.repository;

import com.alim.allconnp.domain.entity.Employee;

import java.util.List;

public interface EmployeeRepositoryCustom {

    List<Employee> findByCompanyCode(String companyCode);
}
