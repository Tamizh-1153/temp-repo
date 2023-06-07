CREATE DATABASE Movie_database;

USE Movie_database;

-- Creating movie info table
CREATE TABLE movies(
	id INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(200),
    Poster VARCHAR(500),
    Trailer VARCHAR(500)
);

INSERT INTO movies
VALUES 	(1,
		'Iron Man',
		'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_.jpg',
		'https://www.youtube.com/watch?v=8ugaeA-nMTc'),
		(2,
        'The Incredible Hulk',
        'https://cdn.kinocheck.com/i/i2jjzvnjm9.jpg',
        'https://www.youtube.com/watch?v=xbqNb2PFKKA'),
		(3,
        'Thor',
        'https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg',
        'https://www.youtube.com/watch?v=JOddp-nlNvQ'),
		(4,
        'Captain America: The First Avenger',
        'https://m.media-amazon.com/images/I/51wGo96+fpL.jpg',
        'https://www.youtube.com/watch?v=JerVrbLldXw'),
		(5,
        'Marvel’s The First Avengers',
        'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
        'https://www.youtube.com/watch?v=eOrNdBpGMv8');
        
        
-- creating genre table
CREATE TABLE genre(
	genre_id INT PRIMARY KEY AUTO_INCREMENT,
    genre VARCHAR(50)
);

INSERT INTO genre
VALUES 	(1,'Action'),
		(2,'Science Fiction'),
		(3,'Superhero'),
		(4,'Fantasy'),
		(5,'Adventure'),
		(6,'Thriller'),
		(7,'Horror');
        

-- creating movie_genre table
CREATE TABLE movie_genre(
	movie_id INT ,
    genre_id INT ,
    movie_name VARCHAR(200),
    genre VARCHAR(50),
    FOREIGN KEY(movie_id) REFERENCES movies(id),
	FOREIGN KEY(genre_id) REFERENCES genre(genre_id)
);

INSERT INTO movie_genre(movie_id,genre_id)
VALUES	(1,2),
		(1,4),
		(2,3),
		(2,1),
		(3,5),
		(3,7),
		(4,1),
		(4,6),
		(5,3),
		(5,2);

UPDATE movie_genre mg

JOIN movies m
	ON mg.movie_id=m.id
SET movie_name=m.Name;

UPDATE movie_genre mg
JOIN genre g
	ON mg.genre_id=g.genre_id
SET  mg.genre=g.genre;

-- creating review table
CREATE TABLE review(
	no_of_reviews INT PRIMARY KEY AUTO_INCREMENT,
    movie_id INT,
    user_id INT,
    user VARCHAR(100),
    movie VARCHAR(100),
    review VARCHAR(200)
);

INSERT INTO review(movie_id,user_id,user,review)
VALUES 	(1,1,'John',"Great movie, which serves as a perfect introduction to Tony Stark's character. The antagonist was a bit boring, but except for that, I loved the movie!"),
		(1,2,'Raj',"Amazing"),
		(2,3,'Tony',"Blasting"),
		(2,1,'John',"Smashing"),
		(3,4,'Bruce',"Nostalgic"),
		(3,5,'Jane',"Thunderr"),
		(4,3,'Tony',"Good"),
		(4,2,'Raj',"Amazing movie"),
		(5,5,'Jane',"Mind-blowing"),
		(5,6,'Sheldon',"Movie of the century");
        
UPDATE review r
JOIN movies m
	ON m.id=r.movie_id
SET r.movie=m.Name ;

-- creating skills table
CREATE TABLE skills(
	skill_id INT PRIMARY KEY AUTO_INCREMENT,
    skill VARCHAR(30)
);

INSERT INTO skills(skill)
VALUES	('Memorization'),
		('Communication'),
		('Body and Voice Control'),
		('Script Analysis'),
		('Stamina'),
		('Self-Tape Basics'),
		('Taking Direction'),
		('Gymnastics'),
		('Martial arts'),
		('Dancing'),
		('Singing');
        
-- creating actors table
CREATE TABLE actors(
	actor_id INT PRIMARY KEY AUTO_INCREMENT,
    actor_name VARCHAR(50)
);

INSERT INTO actors(actor_name)
VALUES	('Robert Downey Jr.'),
		('Norm Macdonald'),
		('Emily Blunt'),
		('Henry cavil'),
		('Chris Pratt');
        
-- creating actors skills table
CREATE TABLE actors_skills(
	actor_id INT,
    skill_id INT,
    actor_name VARCHAR(50),
    skill VARCHAR(50)
);

INSERT INTO actors_skills(actor_id,skill_id)
VALUES	(1,1),
		(1,2),
		(2,3),
		(2,4),
		(3,5),
		(3,6),
		(4,7),
		(4,8),
		(5,9),
        (5,10);
        
UPDATE actors_skills ask
JOIN actors a
	ON ask.actor_id=a.actor_id
SET ask.actor_name=a.actor_name;

UPDATE actors_skills ask
JOIN skills sk
	ON ask.skill_id=sk.skill_id
SET ask.skill=sk.skill;

-- creating roles table
CREATE TABLE roles(
		role_id INT PRIMARY KEY AUTO_INCREMENT,
        role VARCHAR(30)
);

INSERT INTO roles(role)
VALUES	('Director'),
		('Costume designer'),
		('Production Designer'),
		('Producer'),
		('Art Director'),
		('Assistant Director'),
		('Cinematographer'),
		('Camera Operator'),
		('Casting Director'),
		('Actor'),
        ('Actress');
        
-- creating actor roles table
CREATE TABLE actor_roles(
	actor_id INT,
    role_id INT,
    actor_name VARCHAR(50),
    role VARCHAR(50)
);

INSERT INTO actor_roles(actor_id,role_id)
VALUES	(1,1),
		(1,2),
		(2,3),
		(2,4),
		(3,5),
		(3,6),
		(4,7),
		(4,8),
		(5,9),
        (5,10);
        
UPDATE actor_roles ar
JOIN actors a
	ON ar.actor_id=a.actor_id
SET ar.actor_name=a.actor_name;

UPDATE actor_roles ar
JOIN roles r
	ON ar.role_id=r.role_id
SET ar.role=r.role





