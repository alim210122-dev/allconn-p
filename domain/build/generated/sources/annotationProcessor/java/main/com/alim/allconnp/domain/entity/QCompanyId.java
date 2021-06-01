package com.alim.allconnp.domain.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QCompanyId is a Querydsl query type for CompanyId
 */
@Generated("com.querydsl.codegen.EmbeddableSerializer")
public class QCompanyId extends BeanPath<CompanyId> {

    private static final long serialVersionUID = -1709496418L;

    public static final QCompanyId companyId = new QCompanyId("companyId");

    public final StringPath companyCode = createString("companyCode");

    public final StringPath partnerCompanyCode = createString("partnerCompanyCode");

    public QCompanyId(String variable) {
        super(CompanyId.class, forVariable(variable));
    }

    public QCompanyId(Path<? extends CompanyId> path) {
        super(path.getType(), path.getMetadata());
    }

    public QCompanyId(PathMetadata metadata) {
        super(CompanyId.class, metadata);
    }

}

