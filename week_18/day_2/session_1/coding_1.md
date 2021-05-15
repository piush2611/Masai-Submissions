### Week 18 Day 2

**SQL Tables & Queries**

Submission folder `submissions/<your_folder>/week_18/day_2/session_1`

Blog Application

```
A user can create mulitple blogs each can be from a different category, a user can also write as many comments he wants to on a certain blog
```

#### FSD.SQL.8.1

Tables Creation Queries

```mysql
CREATE TABLE users ( id int NOT NULL AUTO_INCREMENT, username varchar(200) NOT NULL, email varchar(200) NOT NULL, PRIAMRY KEY ( id ));

CREATE TABLE blogs ( id int NOT NULL AUTO_INCREMENT, userId int NOT NULL, title varchar(200) NOT NULL, blog varchar(20000) NOT NULL, category varchar(200) NOT NULL, PRIMARY KEY(id), FOREIGN KEY(userId) REFERENCES users(id) );

CREATE TABLE comments ( id int NOT NULL AUTO_INCREMENT, blogId int NOT NULL, comment varchar(500) NOT NULL, PRIMARY KEY (id), FOREIGN KEY (blogId) REFERENCES blogs(id) );

```

#### FSD.SQL.8.2

User Creation Queries

```mysql
INSERT INTO users (username, email) VALUES ('leomessi', 'leomessi@barcelona.com');

INSERT INTO users (username, email) VALUES ('neymar', 'neymar@bpsg.com');

INSERT INTO users (username, email) VALUES ('devillers', 'devillers@rcb.com');

INSERT INTO users (username, email) VALUES ('worldtraveller', 'abish@gmail.com');
```

#### FSD.SQL.8.3

Blog Creation Queries

```mysql
INSERT INTO blogs (userId, title, blog, category, createdOn) VALUES (1, 'Play like lionel messi', 'If you want to play like the great lionel messi, then learn to observe his movements very keenly. Most numbers of defenders find it difficult to man mark messi or defend against messi because they they try to follow his body movements not the ball, and thats the reason why use body dodges in most of his dribbles.', 'sports');

INSERT INTO blogs (userId, title, blog, category, createdOn) VALUES (2, 'Play like neymar', 'If you want to play like the great neymar, then learn to observe his movements very keenly. Most numbers of defenders find it difficult to man mark neymar or defend against neymar because they they try to follow his body movements not the ball, and thats the reason why use body dodges in most of his dribbles.', 'sports');

INSERT INTO blogs(userId, title, blog, category, createdOn) VALUES (3, 'Play like AB Devillers', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, expedita? Similique iure in ducimus dignissimos?', 'sports', '2020-02-18' );

INSERT INTO blogs(userId, title, blog, catgeory, createdOn) VALUES (4, 'Travel world like a pro', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, expedita? Similique iure in ducimus dignissimos? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, expedita? Similique iure in ducimus dignissimos? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, expedita? Similique iure in ducimus dignissimos? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, expedita? Similique iure in ducimus dignissimos?', 'travel');


```

#### FSD.SQL.8.4

Comment Creation Queries

```mysql
INSERT INTO comments (blogId, comment) VALUES (1, 'Perfect and precise');

INSERT INTO comments (blogId, comment) VALUES (2, 'Perfect and precise');

INSERT INTO comments (blogId, comment) VALUES (1, 'Exactly what I needed');

INSERT INTO comments (blogId, comment) VALUES (2, 'Managerial level stuff');
```

#### FSD.SQL.8.5

Find Blogs of a particular user

```mysql
SELECT * FROM blogs WHERE userId = 1;
```


#### FSD.SQL.8.6

Find Blogs of a particular category

```mysql
SELECT * FROM blogs WHERE category = 'sports';
```