package com.alim.allconnp.api.company.ui;

import com.alim.allconnp.api.company.protocol.GetPartnerCompanyResponse;
import com.alim.allconnp.domain.application.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/company")
public class CompanyController {

    private final CompanyService companyService;

    @GetMapping("/{companyCode}/partner")
    public GetPartnerCompanyResponse getPartnerCompnay(@PathVariable String companyCode) {
        return GetPartnerCompanyResponse.builder()
                                        .partnerCompanies(companyService.getPartnerCompanyList(companyCode))
                                        .build();
    }
}
