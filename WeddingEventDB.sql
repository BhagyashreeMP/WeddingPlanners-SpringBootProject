create database wedding_event_management;
use wedding_event_management;
create table admin(username varchar(30) , password varchar(30));
create table customer(name varchar(30) unique, password varchar(30), contact bigint, email_Id varchar(30));
create table event(event_code int primary key, event_name varchar(30), event_price int);
create table orders(event_code int , event_name varchar(30), location varchar(30), date varchar(30));
insert into admin values('Bhagya', 'Shree13');
select * from admin;
select * from event;
select * from customer;
select * from orders;











