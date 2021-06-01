package com.alim.starter.requestloggingfilter;

import org.slf4j.Logger;

public enum LogLevel {

    TRACE {
        @Override
        boolean isEnabled(Logger logger) {
            return logger.isTraceEnabled();
        }

        @Override
        void log(Logger logger, String message) {
            logger.trace(message);
        }
    },
    DEBUG {
        @Override
        boolean isEnabled(Logger logger) {
            return logger.isDebugEnabled();
        }

        @Override
        void log(Logger logger, String message) {
            logger.debug(message);
        }
    },
    INFO {
        @Override
        boolean isEnabled(Logger logger) {
            return logger.isInfoEnabled();
        }

        @Override
        void log(Logger logger, String message) {
            logger.info(message);
        }
    },
    WARN {
        @Override
        boolean isEnabled(Logger logger) {
            return logger.isWarnEnabled();
        }

        @Override
        void log(Logger logger, String message) {
            logger.warn(message);
        }
    },
    ERROR {
        @Override
        boolean isEnabled(Logger logger) {
            return logger.isErrorEnabled();
        }

        @Override
        void log(Logger logger, String message) {
            logger.error(message);
        }
    };

    abstract boolean isEnabled(Logger logger);

    abstract void log(Logger logger, String message);
}
