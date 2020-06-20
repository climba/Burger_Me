-- ### Schema

-- Create a new database called 'burger_me'

CREATE DATABASE burger_me;
USE burger_me;

-- Create a new table called 'burger'
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);