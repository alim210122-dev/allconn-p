package com.alim.allconnp.api.employee.ui;

import com.alim.allconnp.api.employee.protocol.GetEmployeeResponse;
import com.alim.allconnp.domain.application.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/employee")
public class EmployeeController {

    private final EmployeeService employeeService;

    @GetMapping
    public GetEmployeeResponse getEmployee() {
        String companyCode = "alim"; // TODO 인증 값을 이용해서 처리하도록 변경해야함.

        return GetEmployeeResponse.builder()
                .employees(employeeService.findEmployee(companyCode))
                .build();
    }
}
