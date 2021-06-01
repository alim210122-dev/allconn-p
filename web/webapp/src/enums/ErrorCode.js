export const ErrorCode = {
    ACCESS_DENIED: {
        code: 403,
        message: "ACCESS_DENIED",
        isLogout: true,
    },
    SESSION_EXPIRED: {
        code: 1003,
        message: "SESSION_EXPIRED",
        isLogout: true,
    },
    DISPLAY_ORDER_DUPLICATED: {
        code: 1002,
        message: "DISPLAY_ORDER_DUPLICATED",
    },
    GROUP_PREFERENCE_IN_USE: {
        code: 1011,
        message: "GROUP PREFERENCE IN USE",
    },
    resolve(code) {
        return Object.values(this).find(errorCode => errorCode.code === code);
    }
};