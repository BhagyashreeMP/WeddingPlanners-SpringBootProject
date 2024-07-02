package dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import model.Orders;

public interface IOrders extends JpaRepository<Orders, Integer>{

}
