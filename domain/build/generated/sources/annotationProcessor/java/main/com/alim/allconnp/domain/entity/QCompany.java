package com.alim.allconnp.domain.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCompany is a Querydsl query type for Company
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QCompany extends EntityPathBase<Company> {

    private static final long serialVersionUID = 101014307L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QCompany company = new QCompany("company");

    public final QAbstractAudit _super = new QAbstractAudit(this);

    public final StringPath businessRegistrationNumber = createString("businessRegistrationNumber");

    public final StringPath ceoName = createString("ceoName");

    public final StringPath ceoPhoneNumber = createString("ceoPhoneNumber");

    public final StringPath companyAddress = createString("companyAddress");

    public final DatePath<java.sql.Date> companyClosingDate = createDate("companyClosingDate", java.sql.Date.class);

    public final QCompanyId companyId;

    public final StringPath companyName = createString("companyName");

    public final DatePath<java.sql.Date> companyOpeningDate = createDate("companyOpeningDate", java.sql.Date.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdAt = _super.createdAt;

    //inherited
    public final StringPath createdId = _super.createdId;

    public final StringPath deliveryAddress = createString("deliveryAddress");

    public final StringPath managerEmail = createString("managerEmail");

    public final StringPath managerName = createString("managerName");

    public final StringPath managerPhoneNumber = createString("managerPhoneNumber");

    public final StringPath remark = createString("remark");

    public final StringPath tradeType = createString("tradeType");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> updatedAt = _super.updatedAt;

    //inherited
    public final StringPath updatedId = _super.updatedId;

    public QCompany(String variable) {
        this(Company.class, forVariable(variable), INITS);
    }

    public QCompany(Path<? extends Company> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QCompany(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QCompany(PathMetadata metadata, PathInits inits) {
        this(Company.class, metadata, inits);
    }

    public QCompany(Class<? extends Company> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.companyId = inits.isInitialized("companyId") ? new QCompanyId(forProperty("companyId")) : null;
    }

}

