package com.alim.allconnp.domain.entity;

import java.io.Serializable;
import java.sql.Date;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "company")
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class Company extends AbstractAudit implements Serializable {

    private static final long serialVersionUID = 1L;

    @EmbeddedId
    private CompanyId companyId;

    @Column(name = "company_name", nullable = false)
    private String companyName;

    @Column(name = "trade_type", nullable = false)
    private String tradeType;

    @Column(name = "business_registration_number")
    private String businessRegistrationNumber;

    @Column(name = "ceo_name")
    private String ceoName;

    @Column(name = "ceo_phone_number")
    private String ceoPhoneNumber;

    @Column(name = "company_address")
    private String companyAddress;

    @Column(name = "manager_name")
    private String managerName;

    @Column(name = "manager_phone_number")
    private String managerPhoneNumber;

    @Column(name = "manager_email")
    private String managerEmail;

    @Column(name = "company_opening_date")
    private Date companyOpeningDate;

    @Column(name = "company_closing_date")
    private Date companyClosingDate;

    @Column(name = "delivery_address")
    private String deliveryAddress;

    @Column(name = "remark")
    private String remark;
//
//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "company", orphanRemoval = true)
//    private List<CompanyEmployee> companyEmployees = new ArrayList<>();
//
//    public void addCompanyEmployee(CompanyEmployee companyEmployee) {
//        companyEmployees.add(companyEmployee);
//        companyEmployee.setCompany(this);
//    }
}
