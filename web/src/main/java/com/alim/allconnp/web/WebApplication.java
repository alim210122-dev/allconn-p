package com.alim.allconnp.web;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.ApplicationPidFileWriter;

@SpringBootApplication(scanBasePackages = {"com.alim.allconnp"})
public class WebApplication {

    public static void main(String[] args) {
        SpringApplicationBuilder builder = new SpringApplicationBuilder(WebApplication.class);
        builder.build().addListeners(new ApplicationPidFileWriter());
        builder.run(args);
    }
}
