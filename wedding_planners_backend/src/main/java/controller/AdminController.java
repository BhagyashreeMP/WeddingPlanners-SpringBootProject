package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import dao.IAdmin;
import model.Admin;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")

public class AdminController {
@Autowired
IAdmin admin;

@GetMapping("adminLogin/{username}/{password}")
	public String adminLogin(@PathVariable("username") String username,@PathVariable("password") String password) {
	if(admin.findById(username).isPresent()) {
		if(admin.findById(username).get().getPassword().equals(password)) {
			return "true";
		}else {
			return "false";
		}
	}
	return "false";
}

@PutMapping("updateAPass/{username}")
public String updateAPassword(@RequestBody Admin a, @PathVariable("username") String name) {
	admin.findById(a.getUsername()).map(update -> {
		update.setPassword(a.getPassword());
		return admin.save(update);
	});
	return "Password Changed";
}
}