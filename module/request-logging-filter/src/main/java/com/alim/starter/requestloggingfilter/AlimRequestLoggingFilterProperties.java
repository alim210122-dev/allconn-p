package com.alim.starter.requestloggingfilter;

import java.util.Collections;
import java.util.List;
import lombok.Data;

@Data
public class AlimRequestLoggingFilterProperties {

    private boolean includeQueryString = true;
    private boolean includeHeaders = true;
    private boolean includePayload = true;
    private boolean includeClientInfo = true;
    private int maxPayloadLength = 1000000;
    private String afterMessagePrefix = "";
    private String afterMessageSuffix = "";
    private LogLevel logLevel = LogLevel.WARN;
    private AlimRequestLoggingFilterConditionProperties conditions = new AlimRequestLoggingFilterConditionProperties();

    @Data
    public static class AlimRequestLoggingFilterConditionProperties {

        private Integer loggableHttpStatus = 400;
        private List<String> includeUriPatterns = Collections.emptyList();
        private List<String> excludeUriPatterns = Collections.emptyList();
    }
}
