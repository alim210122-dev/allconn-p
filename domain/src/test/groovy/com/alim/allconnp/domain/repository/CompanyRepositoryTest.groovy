package com.alim.allconnp.domain.repository

import com.alim.allconnp.domain.entity.CompanyId
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import spock.lang.Specification

@SpringBootTest
class CompanyRepositoryTest extends Specification {

    @Autowired
    private CompanyRepository companyRepository;

    def "test findByCompanyCode"() {
        given:
        def companyCode = "alim";
        when:
        def list = companyRepository.findByCompanyCode(companyCode);
        then:
        println list;
    }
}
