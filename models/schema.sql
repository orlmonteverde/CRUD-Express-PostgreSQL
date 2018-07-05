CREATE DATABASE indentation_war;

CREATE TABLE team(
    id SMALLSERIAL,
    name VARCHAR(50) NOT NULL,
    twitter VARCHAR(50) NOT NULL,
    country VARCHAR(20) NOT NULL,
    side VARCHAR(10) NOT NULL,
    CONSTRAINT pk_team PRIMARY KEY (id)
);