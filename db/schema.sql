CREATE DATABASE volunteer_db;
USE volunteer_db;

CREATE TABLE volunteers
(
	id int NOT NULL AUTO_INCREMENT,
    email varchar(255) NOT NULL,
    passw varchar(255) NOT NULL,
	firstName varchar(50) NOT NULL,
    lastName varchar(50) NOT NULL,
    address varchar(50) NOT NULL,
    city varchar(50) NOT NULL,
    state varchar(2) NOT NULL,
    age int(3) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE organizations
(
	id int NOT NULL AUTO_INCREMENT,
	title varchar(255) NOT NULL,
    catagory varchar(255),
    details varchar(255), 
	PRIMARY KEY (id)
);

CREATE TABLE events
(
    id int NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    address varchar(50), 
    city varchar(50) NOT NULL,
    state varchar(50) NOT NULL, 
    zip int(5) NOT NULL,
    details varchar(2000) NOT NULL, 
    timeFrame varchar(20) NOT NULL,
    postedDate varchar(20) NOT NULL,
    PRIMARY KEY (id)
);
