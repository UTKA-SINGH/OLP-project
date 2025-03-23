//package com.example.service;
//
//import com.example.model.User;
//import com.example.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class UserService {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    public List<User> getAllUsers() {
//        return userRepository.findAll();
//    }
//
//    public Optional<User> getUserById(Long id) {
//        return userRepository.findById(id);
//    }
//
//    public User createUser(User user) {
//        return userRepository.save(user);
//    }
//
//    public User updateUser(Long id, User userDetails) {
//        User user = userRepository.findById(id).orElseThrow();
//        user.setName(userDetails.getName());
//        user.setEmail(userDetails.getEmail());
//        user.setPassword(userDetails.getPassword());
//        return userRepository.save(user);
//    }
//
//    public void deleteUser(Long id) {
//        userRepository.deleteById(id);
//    }
//}







package com.example.service;

 import com.example.model.User;
 import com.example.repository.UserRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.stereotype.Service;

 import jakarta.servlet.http.HttpSession;
 @ Service
 public class UserService {
	 
	 @Autowired
	 private UserRepository userRepository;
	 
	 public List<User> getAllUsers() {
		 return userRepository.findAll();
	 }

	 public Optional<User> getUserById(Long id) {
		 return userRepository.findById(id);
	 }

	 public User createUser(User user) {
		 return userRepository.save(user);
	 }
   	

	 public User updateUser(Long id, User userDetails) {
		 User user = userRepository.findById(id).orElseThrow();
		 user.setName(userDetails.getName());
		 user.setEmail(userDetails.getEmail());
		 user.setPassword(userDetails.getPassword());
		 return userRepository.save(user);
	 }

	 public void deleteUser(Long id) {
		 userRepository.deleteById(id);
	 }
	 
	 public String registerUser(String email, String password) {
		 if (userRepository.findByEmail(email) != null) {
			 return "User already exists";
		 }
		 User user = new User(email, password);
		 userRepository.save(user);
		 return "User registered successfully";		
	 }
	 
	 public boolean loginUser (String email, String password, HttpSession session) {
		 User user = userRepository. findByEmail(email);
		 if (user != null && user.getPassword().equals(password)) {
			 session.setAttribute("loggedInUser", user);
			 return true;
		 } else {
		 return false;
		 }
	 }
	 
	 public boolean isLoggedIn(HttpSession session) {
		 return session.getAttribute("loggedInUser") != null;
   }
}