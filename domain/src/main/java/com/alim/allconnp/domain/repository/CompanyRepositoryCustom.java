package com.alim.allconnp.domain.repository;

import com.alim.allconnp.domain.dto.PartnerCompany;
import java.util.List;

public interface CompanyRepositoryCustom {

    List<PartnerCompany> findByCompanyCode(String companyCode);
}
