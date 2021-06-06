package com.alim.allconnp.api.company.ui;

import com.alim.allconnp.api.company.protocol.AddCompanyRequest;
import com.alim.allconnp.api.company.protocol.AddCompanyResponse;
import com.alim.allconnp.api.company.protocol.GetCompanyDetailsResponse;
import com.alim.allconnp.api.company.protocol.GetCompanyResponse;
import com.alim.allconnp.api.company.protocol.RemoveCompanyResponse;
import com.alim.allconnp.domain.application.CompanyService;
import com.alim.allconnp.domain.entity.Company;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/company")
public class CompanyController {

    private final CompanyService companyService;

    @GetMapping("/{companyCode}")
    public GetCompanyResponse getCompnay(@PathVariable String companyCode) {
        return GetCompanyResponse.builder()
                                 .partnerCompanies(companyService.findCompanyList(companyCode))
                                 .build();
    }

    @GetMapping("/{companyCode}/partner/{partnerCompanyCode}")
    public GetCompanyDetailsResponse getCompnayDetails(@PathVariable String companyCode,
                                                       @PathVariable String partnerCompanyCode) {
        return GetCompanyDetailsResponse.builder()
                                        .company(companyService.findCompanyDetails(companyCode, partnerCompanyCode))
                                        .build();
    }

    @PostMapping
    public AddCompanyResponse addPartnerCompnay(@RequestBody AddCompanyRequest request) {

        Company company = companyService.addCompany(request.getCompany());

        return AddCompanyResponse.builder()
                                 .company(company)
                                 .build();
    }

    @DeleteMapping("/{companyCode}/partner/{partnerCompanyCode}")
    public RemoveCompanyResponse removePartnerCompnay(@PathVariable String companyCode,
                                                      @PathVariable String partnerCompanyCode) {

        companyService.removeCompany(companyCode, partnerCompanyCode);

        return RemoveCompanyResponse.builder()
                                    .companyCode(companyCode)
                                    .partnerCompanyCode(partnerCompanyCode)
                                    .build();
    }
}
