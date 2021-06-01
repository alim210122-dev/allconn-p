package com.alim.allconnp.api;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.ApplicationPidFileWriter;

@SpringBootApplication(scanBasePackages = {"com.alim.starter", "com.alim.allconnp"})
public class ApiApplication {

    public static void main(String[] args) {
        SpringApplicationBuilder builder = new SpringApplicationBuilder(ApiApplication.class);
        builder.build().addListeners(new ApplicationPidFileWriter());
        builder.run(args);
    }
}
