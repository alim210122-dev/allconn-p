package com.alim.allconnp.api.company.protocol;

import com.alim.allconnp.domain.dto.PartnerCompany;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@AllArgsConstructor
@Builder
@Getter
public class GetPartnerCompanyResponse {

    private List<PartnerCompany> partnerCompanies;

}
