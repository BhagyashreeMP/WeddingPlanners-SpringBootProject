package model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Customer {
	@Id
	@Column(name = "cust_name")
	private String custName;
	@Column(name = "cust_pass")
	private String custPassword;
	@Column(name = "cust_email")
	private String custEmail;
	private String contact;

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getCustName() {
		return custName;
	}

	public void setCustName(String custName) {
		this.custName = custName;
	}

	public String getCustPassword() {
		return custPassword;
	}

	public void setCustPassword(String custPassword) {
		this.custPassword = custPassword;
	}
	public String getCustEmail() {
		return custEmail;
	}

	public void setCustEmail(String custEmail) {
		this.custEmail = custEmail;
	}

	public Customer(String custName, String custPassword, String custEmail, String contact) {
		super();
		this.custName = custName;
		this.custPassword = custPassword;
		this.custEmail = custEmail;
		this.contact = contact;
	}

	public Customer() {
		super();
	}

}
