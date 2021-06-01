package com.alim.allconnp.api.utils

import com.alim.allconnp.domain.entity.User
import com.alim.allconnp.domain.entity.UserRole
import org.springframework.beans.factory.annotation.Autowired
import spock.lang.Specification

class TokenUtilsTest extends Specification {

    @Autowired
    private TokenUtils tokenUtils;

    def "generate Token"() {
        given:
        User user = User.builder()
                .email("ropeze@gmail.com")
                .isEnable(true)
                .name("김능현")
                .password("1234")
                .role(UserRole.ADMIN)
                .build();
        when:
        def token = TokenUtils.generateJwtToken(user);
        then:
        println token
    }
}
