package com.alim.allconnp.domain.application;

import com.alim.allconnp.domain.dto.PartnerCompany;
import com.alim.allconnp.domain.entity.Company;
import com.alim.allconnp.domain.entity.CompanyId;
import com.alim.allconnp.domain.repository.CompanyRepository;
import java.util.List;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CompanyService {

    private final CompanyRepository companyRepository;

    public List<PartnerCompany> findCompanyList(String companyCode) {
        return companyRepository.findByCompanyCode(companyCode);
    }

    public Company findCompanyDetails(String companyCode, String partnerCompanyCode) {
        return companyRepository.findById(CompanyId.builder()
                                                   .companyCode(companyCode)
                                                   .partnerCompanyCode(partnerCompanyCode)
                                                   .build()).orElse(null);
    }

    @Transactional
    public Company addCompany(Company company) {
        return companyRepository.save(company);
    }

    @Transactional
    public void removeCompany(String companyCode, String partnerCompanyCode) {
    }
}
