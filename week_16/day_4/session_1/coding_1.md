### FSD.SQL.2.1 (Continents, Countries & Cities)

**Create Database**

```sql
CREATE DATABASE continentDatabase ;
```

**Create Tables**

```sql
CREATE TABLE continents ( Id int, Continent varchar(14) );
CREATE TABLE countries ( Id int, Country varchar(20), ContinentId int );
CREATE TABLE cities ( Id int, City varchar(30), CountryId int, ContinentId int );
```

**Create Data (Atleast 5 rows in a table)**

```sql
INSERT INTO continents (Id, Continent) VALUES (1, 'ASIA');
INSERT INTO continents (Id, Continent) VALUES (2, 'AFRICA');
INSERT INTO continents (Id, Continent) VALUES (3, 'SOUTH AMERICA');
INSERT INTO continents (Id, Continent) VALUES (4, 'SOUTH AMERICA');
INSERT INTO continents (Id, Continent) VALUES (5, 'Australia');

INSERT INTO countries (Id, Country, ContinentId ) VALUES (1, 'INDIA', 1);
INSERT INTO countries (Id, Country, ContinentId ) VALUES (2, 'CHINA', 2);
INSERT INTO countries (Id, Country, ContinentId ) VALUES (3, 'BANGLADESH', 1);
INSERT INTO countries (Id, Country, ContinentId ) VALUES (4, 'ARGENTINA', 2);
INSERT INTO countries (Id, Country, ContinentId ) VALUES (5, 'colombia', 2);

INSERT INTO cities (Id, City,  CountryId, ContinentId ) VALUES (1, 'PUNE', 1, 1);
INSERT INTO cities (Id, City,  CountryId, ContinentId ) VALUES (2, 'BANGALORE', 1, 1);
INSERT INTO cities (Id, City,  CountryId, ContinentId ) VALUES (3, 'WARDHA', 2, 1);
INSERT INTO cities (Id, City,  CountryId, ContinentId ) VALUES (4, 'BEUNOS AIRES', 4, 1);
INSERT INTO cities (Id, City,  CountryId, ContinentId ) VALUES (5, 'ROSARIO', 4, 1);
```

**Read Data (From all tables using atleast 2 different where condition)**

```sql
SELECT * FROM continents WHERE Id = 1;
SELECT * FROM continents WHERE Continent = 'SOUTH AMERICA';

SELECT * FROM countries WHERE ContinentId = 1;
SELECT * FROM countries WHERE Country = 'ARGENTINA';

SELECT * FROM cities WHERE CountryId = 1;
SELECT * FROM cities WHERE ContinentId = 2;
```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```sql
UPDATE continents SET Continent = "NORTH AMERICA" WHERE Id = 4;
UPDATE continents SET Continent = "AUSTRALIA" WHERE Id = 5;

UPDATE countries SET ContinentId = 1 WHERE Country = 'CHINA';
UPDATE countries SET Country = "COLOMBIA" WHERE Id = 5;

UPDATE cities SET CountryId = 1 WHERE City = 'WARDHA';
UPDATE cities SET ContinentId = 2 WHERE CountryId = 4;
```

**Delete Data (From all tables using atleast 2 different where condition)**

```sql
DELETE FROM continents WHERE Id = 5;
DELETE FROM continents WHERE Continent = 'NORTH AMERICA';

DELETE FROM countries WHERE country = 'BANGLADESH';
DELETE FROM countries WHERE ContinentId = 2;

DELETE FROM cities WHERE ContinentId = 2;
DELETE FROM cities WHERE City = 'BANGALORE';
```

**Empty Tables**

```sql
TRUNCATE TABLE continents;
TRUNCATE TABLE countries;
TRUNCATE TABLE cities;
```

**Delete Tables**

```sql
DROP TABLE continents;
DROP TABLE countries;
DROP TABLE cities;
```

**Delete Database**

```sql
DROP DATABASE continentDatabase;
```

### FSD.SQL.2.2 (User Checklists)

**Create Database**

```sql
CREATE DATABASE checklistDatabase;
```

**Create Tables**

```sql
CREATE TABLE users ( Id int, Username varchar(30) );
CREATE TABLE checklists ( Id int, Checklist varchar(50), UserId int);
CREATE TABLE tasks ( Id int, Task varchar(250), ChecklistId int, UserId int);
```

**Create Data (Atleast 5 rows in a table)**

```sql
INSERT INTO users (Id, Username) VALUES (1, 'lionelmessi');
INSERT INTO users (Id, Username) VALUES (2, 'cristianoronaldo');
INSERT INTO users (Id, Username) VALUES (3, 'neymarjr');
INSERT INTO users (Id, Username) VALUES (4, 'dejong');
INSERT INTO users (Id, Username) VALUES (5, 'greizmann');

INSERT INTO checklists (Id, Checklist, UserId) VALUES (1, 'Physical strength', 1);
INSERT INTO checklists (Id, Checklist, UserId) VALUES (2, 'Dribbling', 2);
INSERT INTO checklists (Id, Checklist, UserId) VALUES (3, 'Power', 2);
INSERT INTO checklists (Id, Checklist, UserId) VALUES (4, 'Physical strength', 3);
INSERT INTO checklists (Id, Checklist, UserId) VALUES (5, 'Controlling', 4);
INSERT INTO checklists (Id, Checklist, UserId) VALUES (6, 'Attacking', 5);

INSERT INTO tasks (Id, Task, ChecklistId, UserId ) VALUES (1, 'Do leg workouts in gym', 1, 1);
INSERT INTO tasks (Id, Task, ChecklistId, UserId ) VALUES (2, 'Do 10 sprints daily', 1, 1);
INSERT INTO tasks (Id, Task, ChecklistId, UserId ) VALUES (3, 'Focus on Upperbody', 1, 1);
INSERT INTO tasks (Id, Task, ChecklistId, UserId ) VALUES (4, 'Do practice dribbling drills daily ', 2, 2);
INSERT INTO tasks (Id, Task, ChecklistId, UserId ) VALUES (5, 'Morning pratice dribbling skill, evening implement those dribbling skills in match', 1, 2);
INSERT INTO tasks (Id, Task, ChecklistId, UserId ) VALUES (6, 'Do leg workouts in gym', 3,3 );
INSERT INTO tasks (Id, Task, ChecklistId, UserId ) VALUES (7, 'Do 10 sprints daily', 3, 4);
INSERT INTO tasks (Id, Task, ChecklistId, UserId ) VALUES (8, 'Focus on Upperbody', 3, 3);

```

**Read Data (From all tables using atleast 2 different where condition)**

```sql
SELECT * FROM users WHERE Username = 'dejong';
SELECT * FROM users WHERE Id = 5;

SELECT * FROM checklists WHERE Id = 3;
SELECT * FROM checklists WHERE UserId = 3;

SELECT * FROM tasks WHERE UserId = 1;
SELECT * FROM tasks WHERE Id = 7 ;
```

**Update Data (All tables using atleast 2 different where condition and changing atleast 2 different values)**

```sql
UPDATE users SET Username = "leomessi" WHERE Id = 1;
UPDATE users SET Username = "antoniogreizmann" WHERE Username = 'greizmann';

UPDATE checklists SET Checklist = 'Footwork' WHERE Checklist = 'dribbling';
UPDATE checklists SET Checklist = "Control" WHERE Id = 5;

UPDATE tasks SET Task = 'Focus on lower body more' WHERE Id = 3;
UPDATE tasks SET ChecklistId = 2 WHERE UserId = 2; 
```

**Delete Data (From all tables using atleast 2 different where condition)**

```sql
DELETE FROM users WHERE Id = 5;
DELETE FROM users WHERE Username = 'dejong';

DELETE FROM checklists WHERE UserId = 4;
DELETE FROM checklists WHERE Checklist = 'Physical strength';

DELETE FROM tasks WHERE Id = 7;
DELETE FROM tasks WHERE ChecklistId = 3;
```

**Empty Tables**

```sql
TRUNCATE TABLE users;
TRUNCATE TABLE checklists;
TRUNCATE TABLE tasks;
```

**Delete Tables**

```sql
DROP TABLE users;
DROP TABLE checklists;
DROP TABLE tasks;
```

**Delete Database**

```sql
DROP DATABASE checklistDatabase;
```
