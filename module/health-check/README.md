# 사용법

Spring Actuator와 사용법이 동일

아래와 같이 health-check url을 선언할 수 있음

**의존성 설정**

```xml
<dependency>
  <groupId>com.alimcom.alim</groupId>
  <artifactId>alim-spring-boot-starter-health-check</artifactId>
  <version>0.0.1-SNAPSHOT</version>
</dependency>
```

## **application.yml 설정**
### 1.0.44 이하 
(@Deprecated)

```yaml
management:
  endpoints.web:
    base-path: /monitor
    path-mapping.health: /l7check
    exposure.include: health
  health:
    type: memory # 메모리기반(memory), 파일기반(file)을 선택할 수 있다
    file-path: /home1/irteam/deploy/ondeploy # 파일 기반인 경우 특정 파일이 존재하면 down, 없으면 up을 응답한다
    defaults.enabled: false
```
위와 같은 설정으로 `/monitor/l7check`에 `GET` 혹은 `OPTIONS`로 요청시 200 응답을 받게 됨


--- 
### 1.0.45 버전 이상

아래처럼 설정하여 사용

```yml
#url설정
alim:
  health-check:
    url: /monitor/l7check

#방식설정
management:
  endpoints.web:
    health:
      type: memory # 메모리기반(memory), 파일기반(file)을 선택할 수 있다
      file-path: /home1/irteam/deploy/ondeploy # 파일 기반인 경우 특정 파일이 존재하면 down, 없으면 up을 응답한다
      defaults.enabled: false
```
위처럼 등록하면 총 5개의 api가 작동하게됨

- GET /monitor/l7check
- PUT /monitor/l7check/up
- PUT /monitor/l7check/down
- PUT /monitor/l7check      (up과 같은기능)
- DELETE /monitor/l7check   (down과 같은기능)

> management.endpoints.web.base-path -> tk
> management.endpoints.web.path-mapping.health -> 설정금지
```yaml
management:
  endpoints.web:
    base-path: /monitor #지우기
    path-mapping.health: /l7check#지우기
```



## 상태 변경

### 1.0.44 이하

- `PUT /monitor/l7check/{status}`로 상태값 변경 가능 :  < `2.1` 
- `PUT /l7check/{status}`로 상태값 변경 가능 :  모든 버전 (1.0.44 버전이상부터)
- `/monitor/**` 같은 패턴으로 필터나 인터셉터가 걸려있지는 않은지 점검할필요가있음

### 1.0.45 이상
- PUT /monitor/l7check      (up과 같은기능)
- DELETE /monitor/l7check   (down과 같은기능)

기본 상태값 별 응답 코드

- up : 200
- down : 503
- out-of-service : 503


## 상태코드변경

`application.yml`설정으로 상태값 별로 응답 코드 변경할 수 있음

```yaml
ccccc
```

# 주의

ContentNegotiatingViewResolver를 사용하는 경우 actuator에서 등록되는 Endpoint에서
강제로 Negotiating을 무시하도록 SKIP 설정이 된다.
이 모듈에서는 Negotiating이 가능하도록 강제 설정한다.
AttributeDenyRequestFilter 참조바람.

alim.health-check.url 가 필수값으로바뀌었다.
management.endpoints.web.base-path 와 같은값을 쓴다면 충돌이 나므로 exception을 발생시킨다.
