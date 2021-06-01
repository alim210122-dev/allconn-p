package com.alim.allconnp.domain

import org.springframework.security.core.Authentication
import org.springframework.security.core.context.SecurityContext
import org.springframework.security.core.context.SecurityContextHolder
import spock.lang.Specification

abstract class SecurityContextHolderTest extends Specification {
    def setupSpec() {
        def authentication = Mock(Authentication);
        authentication.getName() >> "tester"
        def securityContext = Mock(SecurityContext)
        securityContext.getAuthentication() >> authentication
        SecurityContextHolder.setContext(securityContext)
    }
}
