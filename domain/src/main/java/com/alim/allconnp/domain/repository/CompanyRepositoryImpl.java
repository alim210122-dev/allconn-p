package com.alim.allconnp.domain.repository;

import static com.alim.allconnp.domain.entity.QCompany.company;

import com.alim.allconnp.domain.dto.PartnerCompany;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.util.List;

public class CompanyRepositoryImpl implements CompanyRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    private CompanyRepositoryImpl(final JPAQueryFactory jpaQueryFactory) {
        this.jpaQueryFactory = jpaQueryFactory;
    }

    @Override
    public List<PartnerCompany> findByCompanyCode(String companyCode) {
        return jpaQueryFactory.select(Projections.constructor(PartnerCompany.class,
                                                              company.companyId.companyCode,
                                                              company.companyId.partnerCompanyCode,
                                                              company.companyName,
                                                              company.tradeType,
                                                              company.businessRegistrationNumber,
                                                              company.ceoName,
                                                              company.ceoPhoneNumber,
                                                              company.companyAddress,
                                                              company.managerName,
                                                              company.managerPhoneNumber,
                                                              company.managerEmail,
                                                              company.companyOpeningDate,
                                                              company.companyClosingDate,
                                                              company.deliveryAddress,
                                                              company.remark,
                                                              company.createdId,
                                                              company.createdAt,
                                                              company.updatedId,
                                                              company.updatedAt))
                              .from(company)
                              .where(company.companyId.companyCode.eq(companyCode))
                              .fetch();
    }
}
