package com.alim.allconnp.api.employee.protocol;

import com.alim.allconnp.domain.entity.Employee;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@AllArgsConstructor
@Builder
@Getter
public class GetEmployeeResponse {

    private List<Employee> employees;
}
