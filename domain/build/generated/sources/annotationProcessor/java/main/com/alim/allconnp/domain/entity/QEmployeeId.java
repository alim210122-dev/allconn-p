package com.alim.allconnp.domain.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QEmployeeId is a Querydsl query type for EmployeeId
 */
@Generated("com.querydsl.codegen.EmbeddableSerializer")
public class QEmployeeId extends BeanPath<EmployeeId> {

    private static final long serialVersionUID = -439053309L;

    public static final QEmployeeId employeeId1 = new QEmployeeId("employeeId1");

    public final StringPath companyCode = createString("companyCode");

    public final StringPath employeeId = createString("employeeId");

    public QEmployeeId(String variable) {
        super(EmployeeId.class, forVariable(variable));
    }

    public QEmployeeId(Path<? extends EmployeeId> path) {
        super(path.getType(), path.getMetadata());
    }

    public QEmployeeId(PathMetadata metadata) {
        super(EmployeeId.class, metadata);
    }

}

