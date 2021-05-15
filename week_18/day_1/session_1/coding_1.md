### Week 18 Day 1 Session 1

**The given test databases write the queries for the given scenarios**

Submission folder `submissions/<your_folder>/week_18/day_1/session_1`

### FSD.SQL.6.1

Table - `students_marks`

Average maths marks of all the female students grade wise

```sql
SELECT AVG(maths) as avgMath, class, section FROM ( SELECT * FROM students_marks WHERE gender = 'Female') AS data GROUP BY class, section;
```

Average marks subject wise of all male students who scored more that 85 in maths, science and english section wise

```sql
SELECT AVG(maths) AS avgMath, AVG(science) AS avgSci, AVG(english) AS avgEng, class, section FROM ( SELECT * FROM students_marks WHERE gender = 'Male') AS data GROUP BY class, section;
```

Subject wise average marks of all students who scored between 50 and 75 marks in maths and english

```sql
SELECT AVG(maths) AS avgMath, AVG(english), class, section AS avgEng FROM (SELECT * FROM students_marks WHERE maths BETWEEN 50 AND 75 AND english BETWEEN 50 AND 75) AS data GROUP BY class,section;
```

Average total marks of students from class I to class V who score more that 50 in all subjects

```sql
SELECT AVG(maths+science+english) as avg, class, section FROM (SELECT * FROM students_marks WHERE class IN ('I','II', 'III', 'IV', 'V') AND maths > 50 AND science > 50 AND english > 50) AS data GROUP BY class, section;
```

Average subjects scores of all the female students from grade X  section A who scored  less that 25 in all subjects

```sql
SELECT AVG(maths) AS mathAvg, AVG(science) AS sciAvg, AG(english) AS engAvg FROM ( SELECT * FROM students_marks WHERE class = 'X' AND section = 'A' AND english < 25 AND science < 25 AND maths < 25 AND gender = 'Female' ) AS data;
```


Average subject marks of students from section A who scored less than 50 in all the subjects

```sql
SELECT AVG(maths) AS mathAvg, AVG(science) AS sciAvg, AVG(english) AS engAvg FROM students_marks WHERE section = 'A' AND maths < 50 AND science < 50 AND english < 50;
```

Grade wise average total marks of Students from section C

```sql
SELECT AVG( maths + science + english ) as avgTotalMarks, class, section FROM ( SELECT * FROM students_marks WHERE section = 'C' ) AS data GROUP BY class, section;
```


Female Students count by grade and section

```sql
SELECT COUNT(*) AS cnt, class, section FROM ( SELECT * FROM students_marks WHERE gender = 'Female' ) AS data GROUP BY class, section;
```

Top to bottom averge total marks of all male students by grade and section

```sql
SELECT AVG(maths + science + english )  as avgTotalMarks, class, section FROM ( SELECT * FROM students_marks WHERE gender = 'Male') AS data GROUP BY  class, section ORDER BY avgTotalMarks DESC;
```

### FSD.SQL.6.2

Table - `employee_salary`

Department wise average salaries

```sql
SELECT AVG(salary) AS avgSalary, department FROM employee_salary GROUP BY department;
```

Company wise average salaries

```sql
SELECT AVG(salary) AS avgSalary, company FROM employee_salary GROUP BY company;
```

Company and department wise count of people who make less than one million

```sql
SELECT company, COUNT(company) AS companyCnt, department, COUNT(department) AS depCnt FROM ( SELECT * FROM employee_salary WHERE salary < 1000000) AS data GROUP BY company, department;
```

Average salary of people who belong Engineering  who make less than 100k 

```sql
SELECT AVG(salary)as avgSalary FROM employee_salary WHERE department = 'Engineering' AND salary < 100000;
```

Comapny wise average salary of  Engineering people who earn more than 100k

```sql
SELECT AVG(salary) as avgSalary, company FROM ( SELECT * FROM employee_salary WHERE department = 'Engineering' AND salary < 100000 ) AS data GROUP BY company;
```

Department wise total salary of women 

```sql
SELECT SUM(salary) as totalSalary, department FROM ( SELECT * FROM employee_salary WHERE gender = 'Female' ) AS data GROUP BY department;
```

Company wise average salary of men in Human Resources

```sql
SELECT AVG(salary) as avgSalary FROM ( SELECT * FROM employee_salary WHERE gender = 'Male' AND department = 'Human Resources') AS data GROUP BY company;
```

### FSD.SQL.6.3

Table - `cars_data`

Count of cars based on the make
```sql
SELECT COUNT(*) AS count, car_make FROM cars_data GROUP BY car_make;
```

List of all the car colors whose count is more 50
```sql
SELECT COUNT(*) AS count, car_make, car_color FROM cars_data GROUP BY HAVING count > 50;
```

Country wise average age of all cars
```sql
SELECT AVG(age), country FROM ( SELECT ( 2020 - purchase_year) AS age, country FROM cars_data) GROUP BY country;
```


### FSD.SQL.6.4

Table - `users_data`

List all the available shirt sizes with the count of users 

```sql
SELECT COUNT(*) as cnt, shirt_size FROM user_data GROUP BY shirt_size; 
```

Count of users segregated by language and gender

```sql
SELECT COUNT(*) as cnt, language, gender FROM user_data GROUP BY language, gender;
```

Count all the females segregrated by shirt sizes

```sql
SELECT COUNT(*) AS cnt, shirt_size FROM user_data WHERE gender = 'Female' GROUP BY shirt_size;
```


Count of all male users who wear the size `2XL`

```sql
SELECT COUNT(*) FROM user_data WHERE gender = 'Male' AND shirt_size = '2XL';
```