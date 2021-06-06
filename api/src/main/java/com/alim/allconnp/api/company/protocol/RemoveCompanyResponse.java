package com.alim.allconnp.api.company.protocol;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@AllArgsConstructor
@Builder
@Getter
public class RemoveCompanyResponse {
    private String companyCode;
    private String partnerCompanyCode;
}
