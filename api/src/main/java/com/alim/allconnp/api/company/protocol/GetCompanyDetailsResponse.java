package com.alim.allconnp.api.company.protocol;

import com.alim.allconnp.domain.dto.PartnerCompany;
import com.alim.allconnp.domain.entity.Company;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@AllArgsConstructor
@Builder
@Getter
public class GetCompanyDetailsResponse {

    private Company company;
}
