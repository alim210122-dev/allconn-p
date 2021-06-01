# 사용법

**의존성 설정**

```xml
<dependency>
  <groupId>com.alim.starter</groupId>
  <artifactId>alim-spring-boot-starter-request-logging-filter</artifactId>
  <version>0.0.1-SNAPSHOT</version>
</dependency>
```

**application.yml 설정**

```yaml
#기본값
alim.request-logging-filter:
  enabled: true # filter 활성화 여부
  include-query-string: true # query string 포함 여부
  include-headers: true # header 포함 여부
  include-client-info: true # client 정보 포함 여부
  include-payload: true # body 포함 여부
  max-payload-length: 1000000 # 로그 남길 body의 최대 길이 
  after-message-prefix: "" # 로그 메세지 접두사
  after-message-suffix: "" # 로그 메세지 접미사
  log-level: warn # 로그 레벨
  condition:
    loggable-http-status: 400 # 로그를 남기기 시작할 http status code
    include-uri-pattern: # 로그를 남길 URI(ant pattern) 목록
    exclude-uri-pattern: # 로그를 남기지 않을 URI(ant pattern) 목록
```
