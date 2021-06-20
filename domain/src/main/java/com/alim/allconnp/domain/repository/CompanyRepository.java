package com.alim.allconnp.domain.repository;

import com.alim.allconnp.domain.entity.Company;
import com.alim.allconnp.domain.entity.CompanyId;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepository extends JpaRepository<Company, CompanyId>, CompanyRepositoryCustom {

    @Override
    Optional<Company> findById(CompanyId companyId);
}