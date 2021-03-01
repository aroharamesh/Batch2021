show databases;

create database aroha_task;

use aroha_task; /*creating new database*/

create table city(city_id int primary key AUTO_INCREMENT ,city_name varchar(50) not null);

create table customers(cus_id int primary key auto_increment, cus_name varchar(30) not null, dob date ,Gender varchar(30), phone varchar(15), cus_email varchar(20), city_id int );

/*to insert data into the tables*/


show tables;

insert into customers (cus_name, dob  ,Gender, phone, cus_email, city_id) values ('sachin','1996-07-09','male','8277553674','sachin.s1dn@gmail.com',1),('praveen','1998-08-09','male','9877553674','praveen.s1dn@gmail.com',4),('mouna','1995-06-08','female','8035013674','mouna@gmail.com',4),('jeevan','1999-08-10','male','8268553674','jeevan1dn@gmail.com',5),('lokesh','1996-07-09','male','8050772563','lokesh@gmail.com',1),('ramesh','1993-06-09','male','8505932501','ramesh@gmail.com',6),('chintana','1994-08-06','female','9025210587','chintan@gmail.com',6),('raghav','1998-07-08','male','8225063674','raghav@gmail.com',5),('manasa','1998-06-08','female','8665865231','manasa@gmail.com',4),('padmashree','1997-02-24','female','8035073674','padmagowda@gmail.com',1),('yash','1996-07-09','male','9880059462','yash@gmail.com',3),('mahendra','1993-08-04','male','9052553674','mahi@gmail.com',3),('puneeth','1995-06-09','male','9858277524','puneeth@gmail.com',2),('rohan','1998-07-10','male','8221775574','rohan@gmail.com',2),('piyush','1996-08-07','male','8277215231','piyush.@gmail.com',2);

select * from city;

desc city; /*to know the structure of the city table*/

desc customers_id; /*also for customers*/

#to view the all the data in customer table

select * from customers; 


#customers donot have a phone;

select cus_name from customers where phone is null or phone = '';


#display the all the male customers

select * from customers where Gender = 'male';


#for perticular customers who have male

select cus_name from customers where Gender = 'male';


#display the customers who were born in the year 1996

SELECT * from customers where year(dob) = '1996';


# display the customer name and customer age

SELECT cus_name ,round(DATEDIFF(NOW(), (dob))/365) as age FROM customers;


#display the customer names whose age is more than 60;

#insert the customers

insert into customers (cus_name,dob,gender,phone,cus_email,city_id) values ('ravi','1960-01-01','male','8905682731','ravi@gmail.com',3),('surya','1950-12-01','male','8105682731','surya@gmail.com',3);

SELECT cus_name ,round(DATEDIFF(NOW(), (dob))/365) as age FROM customers where round(DATEDIFF(NOW(), (dob))/365) >60;


#display the customer name and his city name

select customers.cus_name , city.city_name from customers,city where customers.city_id = city.city_id;


#display the customer who have their email in gmail using wild character

select * from customers where cus_email like '%gmail.com%'; 


#display the customers_name who are from chennai.

 select cus_name from customers where city_id=(select city_id from city where city_name='chennai');
 
 
 #display the customers name who as same city as lokesh
 
 select cus_name from customers where city_id = (select city_id from customers where cus_name='lokesh');
 
 
 # display the customers name where age is more than mouna
 
 SELECT cus_name ,round(DATEDIFF(NOW(), (dob))/365) as age from customers where round(DATEDIFF(NOW(), (dob))/365) > (select round(DATEDIFF(NOW(), (dob))/365) from customers where cus_name = 'mouna');
 
 
 #display the customer_names who have their birthday in current month
 
 select cus_name ,month(dob) from customers where month(dob) = month(now()); 
 

 #we can also use that
 
 select cus_name ,month(dob) from customers where month(dob) = MONTH(CURDATE());
 
 
 #display the first day of current month
 # current date - day of the month + 1 gives first day of month
 
 select (curdate()-day(curdate()))+1 as first_day_of_month;
 
 
 #display the first day of current year 
 
 SELECT MAKEDATE(EXTRACT(YEAR FROM CURDATE()),1) as first_day_of_year;
 
 
 #display the cus_names who as birthaday in the last month;

 select cus_name ,month(now()) as present_month ,month(now())-1 as previous_month from customers where month(dob) = MONTH(CURDATE())-1; 