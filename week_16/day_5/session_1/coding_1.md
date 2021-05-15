### Week 16 Day 5

**The given test database has two tables write the queries for the given scenarios**

### FSD.SQL.3.1

Table - `users_data`

Find all the female users

```sql
SELECT * FROM user_data WHERE gender = "Female";
```

Find all the female users who speak one of the two languages Kannada, Hindi

```sql
SELECT * FROM user_data WHERE ( gender = 'Female' ) AND language IN ("Hindi", "Kannada") :
```

Find all the male users who can speak Hindi and female users who can speak Kannada

```sql
SELECT * FROM user_data WHERE ( gender = "Male" AND language = "Hindi") OR ( gender = 'Female' AND language = "Kannada");
```

Find all the users who wear the shirt size `S`

```sql
SELECT * FROM user_data WHERE shirt_size = "S";
``` 

Find all the female users who wear the shirt size `XL`

```sql
SELECT * FROM user_data WHERE gender = "Female" AND shirt_size = "XL";
```

Find all the English speaking male users and Hindi speaking female users

```sql
SELECT * FROM user_data WHERE ( gender = "Male" AND language = "English") OR ( gender = "Female" AND language = "Hindi") ;
```

Find all the male users who can speak Hindi or English and female users who can speak Kannada or German

```sql
SELECT * FROM user_data WHERE ( gender = "Male" AND language IN ("Hindi", "English") ) OR ( gender = "Female" AND language IN ("Kannada", "German") );
```

Find all the female users who can speak Bengali who wear shirt size `XL` and male users who speak German and wear shirt size either `L` or `M`

```sql
SELECT * FROM user_data WHERE ( gender = "Female" AND language = "Bengali" AND shirt_size = "XL" ) OR ( gender = "Male" AND language = "German" AND shirt_size IN ("L", "M"));
```

Find all the female users who speak any of the Indian languages (Hindi, Punjabi, Bengali, Gujarati, Tamil, Malayalam)

```sql
SELECT * FROM user_data WHERE gender = 'Female' AND language IN ('Hindi', "Punjabi", "Bengali", "Gujarati", "Tamil", "Malayalam" );
```

Men who can speak Korean

```sql
SELECT * FROM user_data WHERE gender = "Male" AND language = "Korean";
```

### FSD.SQL.3.2

Table - `cars_data`

Men who own a Pink car

```sql
SELECT * FROM cars_data WHERE gender = "Male" AND car_color = "Pink";
```

Women who own a Red or a Blue Car

```sql
SELECT * FROM cars_data WHERE gender = "Female" AND car_color IN ("Red", "Blue");
```

Men who purchased the car in the year 1998

```sql
SELECT * FROM cars_data  WHERE gender = "Male" AND purchase_year = 1998;
```

Women who purchased a Yellow car in the year 1985

```sql
SELECT * FROM cars_data WHERE gender = 'Female' AND car_color = "Yellow" AND purchase_year = 1985;
```

Men who either have a Red or Green car and either live in Germany or Kenya

```sql
SELECT * FROM cars_data WHERE gender = 'Male' AND car_color IN ('Red', 'Green') AND country IN ('Germany', 'Kenya');
```

People from India who purchased cars in the year 2001

```sql
SELECT * FROM cars_data WHERE country = "India" AND purchase_year = 2001;
```

People from Germany or Egypt who purchased cars in the year 1998 or 1992

```sql
SELECT * FROM cars_data WHERE country IN ("Germany", "Egypt") AND purchase_year IN (1998,1992);
```

Women from India who own a Blue car

```sql
SELECT * FROM cars_data WHERE country = "India" AND gender = "Female" ;
```

Men from Germany who purchased cars in 1998 and Men from Egypt who purchased cars in 1992

```sql
SELECT * FROM cars_data WHERE gender = 'Male' AND country IN ("Germany", "Egypt") AND purchase_year IN (1998, 1992);
```

Women who own a Green car and are not from Pakistan

```sql
SELECT * FROM cars_data WHERE gender = "Female" AND car_color = "Green" AND country != "Pakistan";
```