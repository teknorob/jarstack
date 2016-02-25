package com.jarstack;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping( "/api")
public class WebsiteController {

	
	@RequestMapping(path = "/")
	public String test(String hello)
	{
		return "ello " + hello;
	}
	
}
