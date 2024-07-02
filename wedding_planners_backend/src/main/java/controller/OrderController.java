package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import dao.IOrders;
import model.Orders;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")

public class OrderController {
	@Autowired
	IOrders order;

	@GetMapping("viewO")
	public List<Orders> viewOrders() {
		return order.findAll();
	}
	
	@DeleteMapping("deleteOrder/{orderCode}")
	public String deleteOrder(@PathVariable("orderCode") int orderCode) {
		order.deleteById(orderCode);
		return "Order Deleted";
	}

	@PutMapping("updateOrder/{orderCode}")
	public String updateOrder(@RequestBody Orders o, @PathVariable("orderCode") int orderCode) {
		order.findById(o.getOrderCode()).map(update -> {
			update.setEventCode(o.getEventCode());
			update.setOrderCode(o.getOrderCode());
			update.setCustName(o.getCustName());
			update.setLocation(o.getLocation());
			update.setDate(o.getDate());
			return order.save(update);
		});
		return "Order Updated";
	}

	@PostMapping("addOrder")
	public String addOrder(@RequestBody Orders o) {
		order.save(o);
		return "Order Added";
	}
}
