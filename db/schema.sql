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
	PRIMARY KEY (id)
    -- UNIQUE KEY `email` (`email`)
);

CREATE TABLE organizations
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
    type varchar(255),
    about varchar(255),
	PRIMARY KEY (id)
);

CREATE TABLE organization_body 
(
    id int NOT NULL AUTO_INCREMENT,
    about text,
    PRIMARY KEY (id)
);

CREATE TABLE event
(
    id int NOT NULL AUTO_INCREMENT,
    event_name varchar(100) NOT NULL,
    address varchar(50), 
    city varchar(50) NOT NULL,
    state varchar(50) NOT NULL,
    zip varchar(10) NOT NULL,
    details varchar(2000) NOT NULL,
    time_frame varchar(20) NOT NULL,
    posted_date varchar(20) NOT NULL,
    PRIMARY KEY (id)
);
