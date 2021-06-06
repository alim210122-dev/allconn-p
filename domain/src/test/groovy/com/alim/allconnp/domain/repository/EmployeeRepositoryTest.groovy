package com.alim.allconnp.domain.repository

import com.alim.allconnp.domain.SecurityContextHolderTest
import com.alim.allconnp.domain.entity.Employee
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class EmployeeRepositoryTest extends SecurityContextHolderTest {

    @Autowired
    private EmployeeRepository employeeRepository;

    def "test findByEmail"() {
        expect:
        println employeeRepository.findByEmail("ropeze@gmail.com");
    }

    def "test findAllByCompanyCode"() {
        given:
        def companyCode = "alim";

        when:
        List<Employee> list = employeeRepository.findByCompanyCode(companyCode)

        then:
        println list
    }
}
