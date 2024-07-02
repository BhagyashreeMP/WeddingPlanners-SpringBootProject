package dao;

import org.springframework.data.jpa.repository.JpaRepository;

import model.Event;

public interface IEvent extends JpaRepository<Event, Integer> {

}
