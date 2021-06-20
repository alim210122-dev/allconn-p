package com.alim.allconnp.domain.entity;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "employee")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
public class Employee extends AbstractAudit implements Serializable {

    private static final long serialVersionUID = 1L;

    @EmbeddedId
    private EmployeeId employeeId;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "department")
    private String department;

    @Column(name = "position")
    private String position;

    @Column(name = "company_email")
    private String companyEmail;

    @Column(name = "home_address")
    private String homeAddress;

    @Column(name = "home_phone_number")
    private String homePhoneNumber;

    @Column(name = "birth_date")
    private String birthDate;

    @Column(name = "gender")
    @Enumerated(EnumType.STRING)
    private GenderType gender;

    @Column(name = "task")
    private String task;

    @Column(name = "emergency_phone_number")
    private String emergencyPhoneNumber;
}
