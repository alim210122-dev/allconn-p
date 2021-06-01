package com.alim.allconnp.domain.repository

import com.alim.allconnp.domain.SecurityContextHolderTest
import com.alim.allconnp.domain.entity.User
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

import javax.persistence.EntityManager

class UserRepositoryTest extends SecurityContextHolderTest {

    private UserRepository userRepository;

    private EntityManager entityManager;

    void setup() {
        entityManager = Stub(EntityManager.class)
    }

    def "test findByEmail"() {
        given:
        def email = "ropeze@gmail.com";
        when:
        Optional<User> user = userRepository.findByEmail(email);
        then:
        println user.orElse(null);
    }
}
