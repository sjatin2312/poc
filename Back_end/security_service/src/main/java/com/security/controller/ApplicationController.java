package com.security.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RequestMapping("/security")
@RestController
public class ApplicationController {


    @GetMapping("/getMsg")
    public String greeting()
    {
        return "Security Example";
    }
}
