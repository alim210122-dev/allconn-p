package com.alim.allconnp.domain.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;
import java.io.Serializable;
import java.sql.Date;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class PartnerCompany implements Serializable {

    private static final long serialVersionUID = 1L;

    private String companyCode;

    private String partnerCompanyCode;

    private String companyName;

    private String tradeType;

    private String businessRegistrationNumber;

    private String ceoName;

    private String ceoPhoneNumber;

    private String companyAddress;

    private String managerName;

    private String managerPhoneNumber;

    private String managerEmail;

    private Date companyOpeningDate;

    private Date companyClosingDate;

    private String deliveryAddress;

    private String remark;

    private String createdId;

    @JsonFormat(shape = Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createdAt;

    private String updatedId;

    @JsonFormat(shape = Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime updatedAt;
}
