package model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Orders {
	@Id
	@Column(name = "event_code")
	private int eventCode;
	@Column(name = "order_code")
	private int orderCode;
	@Column(name = "cust_name")
	private String custName;
	private String location;
	private String date;

	public int getEventCode() {
		return eventCode;
	}

	public void setEventCode(int eventCode) {
		this.eventCode = eventCode;
	}

	public int getOrderCode() {
		return orderCode;
	}

	public void setOrderCode(int orderCode) {
		this.orderCode = orderCode;
	}

	public String getCustName() {
		return custName;
	}

	public void setCustName(String custName) {
		this.custName = custName;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public Orders(int eventCode, int orderCode, String custName, String location, String date) {
		super();
		this.eventCode = eventCode;
		this.orderCode = orderCode;
		this.custName = custName;
		this.location = location;
		this.date = date;
	}

	public Orders() {
		super();
	}

}
