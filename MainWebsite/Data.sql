CREATE DATABASE usernames;
USE usernames;
CREATE TABLE user (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
)
CREATE TABLE email (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    email VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
)