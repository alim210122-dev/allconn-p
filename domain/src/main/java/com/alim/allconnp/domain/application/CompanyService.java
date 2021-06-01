package com.alim.allconnp.domain.application;

import com.alim.allconnp.domain.dto.PartnerCompany;
import com.alim.allconnp.domain.repository.CompanyRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CompanyService {

    private final CompanyRepository companyRepository;

    public List<PartnerCompany> getPartnerCompanyList(String companyCode) {
        return companyRepository.findByCompanyCode(companyCode);
    }
}
