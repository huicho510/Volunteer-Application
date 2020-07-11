CREATE DATABASE volunteer_db;
USE volunteer_db;

CREATE TABLE volunteer
(
	id int NOT NULL AUTO_INCREMENT,
	first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    address varchar(50) NOT NULL,
    city varchar(50) NOT NULL,
    state varchar(50) NOT NULL,
    age int NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE organization
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
    type varchar(255),
	PRIMARY KEY (id)
);
