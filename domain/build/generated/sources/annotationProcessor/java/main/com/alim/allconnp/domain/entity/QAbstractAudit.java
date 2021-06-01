package com.alim.allconnp.domain.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QAbstractAudit is a Querydsl query type for AbstractAudit
 */
@Generated("com.querydsl.codegen.SupertypeSerializer")
public class QAbstractAudit extends EntityPathBase<AbstractAudit> {

    private static final long serialVersionUID = -1638561025L;

    public static final QAbstractAudit abstractAudit = new QAbstractAudit("abstractAudit");

    public final DateTimePath<java.time.LocalDateTime> createdAt = createDateTime("createdAt", java.time.LocalDateTime.class);

    public final StringPath createdId = createString("createdId");

    public final DateTimePath<java.time.LocalDateTime> updatedAt = createDateTime("updatedAt", java.time.LocalDateTime.class);

    public final StringPath updatedId = createString("updatedId");

    public QAbstractAudit(String variable) {
        super(AbstractAudit.class, forVariable(variable));
    }

    public QAbstractAudit(Path<? extends AbstractAudit> path) {
        super(path.getType(), path.getMetadata());
    }

    public QAbstractAudit(PathMetadata metadata) {
        super(AbstractAudit.class, metadata);
    }

}

