CREATE DATABASE volunteer_db;
USE volunteer_db;

CREATE TABLE volunteer
(
	id int NOT NULL AUTO_INCREMENT,
    email varchar(255) NOT NULL,
    passw varchar(255) NOT NULL,
	first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    address varchar(50) NOT NULL,
    city varchar(50) NOT NULL,
    state varchar(50) NOT NULL,
    age int NOT NULL,
	PRIMARY KEY (id),
    --UNIQUE KEY `email` (`email`)
);

CREATE TABLE organization
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
    type varchar(255),
	PRIMARY KEY (id)
);

