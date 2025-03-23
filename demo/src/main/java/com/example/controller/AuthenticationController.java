package com.example.controller;

import com.example.service.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {	
	@Autowired
	private UserService userService;
	
	@PostMapping("/regiester")
	public String register(@RequestBody Map<String, String> request) {
		String email = request.get("email");
		String password = request.get("password");
		return userService.registerUser(email, password);
		
	} 
	
	@PostMapping("/login")
	public Map<String, Object> login(@RequestBody Map<String, String> request, HttpSession session) {
		Map<String, Object> response = new HashMap<>();
		String email = request.get("email");
		String password = request.get("password");
		
		if (userService.loginUser(email, password, session)) {
			response.put("status", "loggedIn");
		} else {
			response.put("status", "failed");
		}
		return response;
	}
}





