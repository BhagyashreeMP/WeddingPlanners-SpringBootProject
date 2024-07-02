package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import dao.ICustomer;
import model.Customer;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")

public class CustomerController {
	@Autowired
	ICustomer cust;

	@GetMapping("viewCustomers")
	public List<Customer> viewCustomers() {
		return cust.findAll();
	}

	@GetMapping("custLogin/{custName}/{custPassword}")
	public String custLogin(@PathVariable("custName") String custName, @PathVariable("custPassword") String custPassword) {
		if (cust.findById(custName).isPresent()) {
			if (cust.findById(custName).get().getCustPassword().equals(custPassword)) {
				return "true";
			} else {
				return "false";
			}
		}
		return "false";
	}

	@PutMapping("updateCPass/{custName}")
	public String updateCPassword(@RequestBody Customer c, @PathVariable("custName") String custName) {
		cust.findById(c.getCustName()).map(update -> {
			update.setCustPassword(c.getCustPassword());
			return cust.save(update);
		});
		return "Password Changed";
	}
	
	@PostMapping("addCustomer")
	public String addCustomer(@RequestBody Customer c) {
		cust.save(c);
		System.out.println("Customer Added");
		return "Signed in Successfully";
	}
}
