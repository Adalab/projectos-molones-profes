create database coolProjects;
use coolProjects;

CREATE TABLE projects (
	idprojects INT not null auto_increment primary key,
	name VARCHAR(100) not null,
    description VARCHAR(1024) not null,
    slogan VARCHAR(1024) not null,
    repo VARCHAR(1024) not null,
    demo VARCHAR(1024) not null,
    technologies VARCHAR(1024) not null,
	image LONGTEXT not null
    );
CREATE TABLE authors (
	idauthor INT not null auto_increment primary key,
    author VARCHAR(1024) not null,
    job VARCHAR(1024) not null,
    image LONGTEXT not null
    );
    
INSERT INTO  authors (author, job, image) values("petra", "programadora", "image");
INSERT INTO  projects (name , description,slogan,repo,demo, technologies,image)value
("proyecto", " desarrollado con node", "lo maximo", "repo", "demo", "react", "imagen");

select * from projects;
select * from authors;

-- Añadir una Fk a Project de authors( modificar estructura de la tabla)

ALTER TABLE  projects ADD COLUMN fk_author int;
alter table projects add foreign key(fk_author) references authors (idauthor);
describe projects;

-- modificar datos  o registros

UPDATE projects  SET fk_author = 1  WHERE idprojects= 1;

select * from projects where name like "%xyz%"  ;
-- CRUD--> CREATE, READ, UPDATE, DELETE
-- PL/SQL -->  funciones, procedmientos, triggers, bucles, condicionales 

SELECT name, description,author 
	FROM authors INNER JOIN projects ON fk_author = idauthor;

