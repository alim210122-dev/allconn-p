package com.alim.allconnp.domain.application;

import com.alim.allconnp.domain.entity.Employee;
import com.alim.allconnp.domain.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public List<Employee> findEmployee(String companyCode) {
        return employeeRepository.findByCompanyCode(companyCode);
    }
}
