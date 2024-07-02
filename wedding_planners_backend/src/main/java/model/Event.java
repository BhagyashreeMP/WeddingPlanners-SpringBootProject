package model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Event {
	@Id
	@Column(name = "event_code")
	private int eventCode;
	@Column(name = "event_name")

	private String eventName;
	@Column(name = "event_price_per_head")

	private int eventPricePerhead;

	public int getEventCode() {
		return eventCode;
	}

	public void setEventCode(int eventCode) {
		this.eventCode = eventCode;
	}

	public String getEventName() {
		return eventName;
	}

	public void setEventName(String eventName) {
		this.eventName = eventName;
	}

	public int getEventPricePerhead() {
		return eventPricePerhead;
	}

	public void setEventPricePerhead(int eventPricePerhead) {
		this.eventPricePerhead = eventPricePerhead;
	}

	public Event(int eventCode, String eventName, int eventPricePerhead) {
		super();
		this.eventCode = eventCode;
		this.eventName = eventName;
		this.eventPricePerhead = eventPricePerhead;
	}

	public Event() {
		super();
	}

}
