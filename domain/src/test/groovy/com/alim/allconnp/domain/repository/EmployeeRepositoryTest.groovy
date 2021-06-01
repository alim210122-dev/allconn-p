package com.alim.allconnp.domain.repository

import com.alim.allconnp.domain.SecurityContextHolderTest
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class EmployeeRepositoryTest extends SecurityContextHolderTest {

    @Autowired
    private EmployeeRepositoryCustom employeeRepository;

    def "test findByEmail"() {
        expect:
        println employeeRepository.findByEmail("ropeze@gmail.com");
    }
}
