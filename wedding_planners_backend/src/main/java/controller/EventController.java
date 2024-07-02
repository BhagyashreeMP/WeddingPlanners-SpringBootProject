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

import dao.IEvent;
import model.Event;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class EventController {
	@Autowired
	IEvent event;

//	@GetMapping("/")
//	public String welcome() {
//		return "welcome";
//	}

	@GetMapping("viewEvents")
	public List<Event> viewEvents() {
		return event.findAll();
	}

	@DeleteMapping("deleteEvent/{eventCode}")
	public String deleteEvent(@PathVariable("eventCode") int id) {
		event.deleteById(id);
		return "Event Deleted";
	}

	@PutMapping("updateEvent/{eventCode}")
	public String updateEvent(@RequestBody Event e, @PathVariable("eventCode") int id) {
		event.findById(e.getEventCode()).map(update -> {
			update.setEventCode(e.getEventCode());
			update.setEventName(e.getEventName());
			update.setEventPricePerhead(e.getEventPricePerhead());
			return event.save(update);
		});
		return "Event Updated";
	}

	@GetMapping("searchEvent/{eventCode}")
	public String searchEvent(@PathVariable("eventCode") int id) {
		return event.findById(id).get().getEventName();
	}

	@PostMapping("addEvent")
	public String addEvent(@RequestBody Event e) {
		event.save(e);
		System.out.println("Add Invoked");
		return "Event Added";
	}
}
