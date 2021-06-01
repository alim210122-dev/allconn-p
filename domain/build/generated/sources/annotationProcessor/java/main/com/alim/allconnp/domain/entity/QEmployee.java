package com.alim.allconnp.domain.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QEmployee is a Querydsl query type for Employee
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QEmployee extends EntityPathBase<Employee> {

    private static final long serialVersionUID = 629710024L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QEmployee employee = new QEmployee("employee");

    public final QAbstractAudit _super = new QAbstractAudit(this);

    public final StringPath birthDate = createString("birthDate");

    public final StringPath companyEmail = createString("companyEmail");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdAt = _super.createdAt;

    //inherited
    public final StringPath createdId = _super.createdId;

    public final StringPath department = createString("department");

    public final StringPath email = createString("email");

    public final StringPath emergencyPhoneNumber = createString("emergencyPhoneNumber");

    public final QEmployeeId employeeId;

    public final StringPath gender = createString("gender");

    public final StringPath homeAddress = createString("homeAddress");

    public final StringPath homePhoneNumber = createString("homePhoneNumber");

    public final StringPath position = createString("position");

    public final StringPath task = createString("task");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> updatedAt = _super.updatedAt;

    //inherited
    public final StringPath updatedId = _super.updatedId;

    public QEmployee(String variable) {
        this(Employee.class, forVariable(variable), INITS);
    }

    public QEmployee(Path<? extends Employee> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QEmployee(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QEmployee(PathMetadata metadata, PathInits inits) {
        this(Employee.class, metadata, inits);
    }

    public QEmployee(Class<? extends Employee> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.employeeId = inits.isInitialized("employeeId") ? new QEmployeeId(forProperty("employeeId")) : null;
    }

}

