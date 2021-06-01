package com.alim.allconnp.domain.entity;

import java.io.Serializable;
import java.util.Objects;
import javax.persistence.Embeddable;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Embeddable
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@Getter
public class CompanyId implements Serializable {

    private String companyCode;

    private String partnerCompanyCode;

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        CompanyId companyId = (CompanyId) o;
        return companyCode.equals(companyId.companyCode) && partnerCompanyCode.equals(companyId.partnerCompanyCode);
    }

    @Override
    public int hashCode() {
        return Objects.hash(companyCode, partnerCompanyCode);
    }
}
