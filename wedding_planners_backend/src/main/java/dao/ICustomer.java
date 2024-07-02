package dao;

import org.springframework.data.jpa.repository.JpaRepository;

import model.Customer;

public interface ICustomer extends JpaRepository<Customer, String>{
}
