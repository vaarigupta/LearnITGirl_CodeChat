package com.springproject;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


//controller 
@RestController
public class HelloWorldController {

	//GET
	//URI
	//method - "hello world"
	
//	@RequestMapping(method= RequestMethod.GET, path="/hello-world")
	@GetMapping(path= "/hello")
	public String helloWorld()
	{
		return "Hello World";
	}
}
