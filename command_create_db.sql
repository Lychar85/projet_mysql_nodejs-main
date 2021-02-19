CREATE DATABASE node_mysql_passport;

USE node_mysql_passport;

CREATE TABLE user
(
	userID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(50) NOT NULL,
	lastname VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
	password VARCHAR(255) NOT NULL
);

CREATE TABLE Music (
        MusicID          Int  Auto_increment  NOT NULL ,
        Music_image varchar(255) NOT NULL,
        Music_author     Varchar (50) NOT NULL ,
        Music__ft_author Varchar (50) NOT NULL ,
        Music_name       Varchar (50) NOT NULL ,
        Music_date       Varchar (50) NOT NULL
	,CONSTRAINT Music_PK PRIMARY KEY (MusicID)
)ENGINE=InnoDB;

SELECT count(*) AS cnt from user where email = "lychar85@gmail.com";

alter table Music 
ADD Music_image varchar(255) NOT NULL;

delete from Music where MusicID = 2;

SELECT * from user;

select * from Music;