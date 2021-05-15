from flask import Flask, request, json
from flask_mysqldb import MySQL
from helper import *
import jwt

app = Flask(__name__)
mysql = MySQL(app)

app.config['MYSQL_USER'] = 'charlie'
app.config['MYSQL_PASSWORD'] = 'charlie'
app.config['MYSQL_DB'] = 'employee'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

from blueprintEmployees import employee

app.register_blueprint(employee, url_prefix='/employee')

@app.route('/', methods=['GET'])
def read():
    if request.method == 'GET':
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ SELECT * FROM employees LIMIT 20 """
        )
        res = cursor.fetchall()
        cursor.close()
        return { 'employees' : res }
    else:
        return {}

@app.route('/register', methods=['POST'])
def register():
    if request.method == 'POST':
        username = request.json['username']
        password = request.json['password']
        email = request.json['email']
        salt = generateSalt()
        passwordHash = multiHashing(password, salt)

        cursor = mysql.connection.cursor()
        cursor.execute(
            """ INSERT INTO users ( username, email, passwordhash, salt) VALUES (%s, %s, %s, %s) """, (username, email, passwordHash, salt)
        )
        mysql.connection.commit()
        cursor.close()
        return { 'message' : 'Registration successfull', 'error' : False}
    else:
        return {}


@app.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        username = request.json['username']
        password = request.json['password']
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ SELECT * FROM users WHERE username = %s """, (username,)
        )
        res = cursor.fetchone()
        cursor.close()    

        hash = multiHashing(password, res['salt'])
        if res['passwordhash'] == hash:
            token = jwt.encode({"id" : res['id']}, "evaluation", algorithm='HS256' )
            return { "message" : 'Login successfull', "token" : token}
        else:
            return { 'message' : 'Invalid login credentials', 'error' : True }
        
    else:
        return {}
    
@app.route('/pagination/<int:pageNo>', methods=['POST', 'GET'])
def pagination(pageNo):
    if request.method == 'GET':
        limit = pageNo*20
        offset = limit - 20
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ SELECT * FROM employees LIMIT %s, %s """, (offset, limit)
        )
        res = cursor.fetchall()
        cursor.close()
        return { 'employees' : res }
    elif request.method == 'POST':
        operation = request.json['operation']

@app.route('/filter/<filterBy>', methods=['GET'])
def filterBy(filterBy):
    if request.method == 'GET':
        cursor = mysql.connection.cursor()
        if filterBy == 'all':
            cursor.execute(
                """ SELECT * FROM employees  """
            )    
        else :
            cursor.execute(
                """ SELECT * FROM employees WHERE department = %s UNION SELECT * FROM employees WHERE gender = %s """, (filterBy, filterBy)
            )
        res = cursor.fetchall()
        cursor.close()
        return {'employees' : res}

@app.route('/sort/<sortBy>', methods=['GET'])
def sortBy(sortBy):
    if request.method == 'GET':
        cursor = mysql.connection.cursor()
        if sortBy == 'ASC' :
            cursor.execute(
                """ SELECT * FROM employees ORDER BY salary ASC """,
            )
        else:
            cursor.execute(
                """ SELECT * FROM employees ORDER BY salary DESC """,
            )
        res = cursor.fetchall()
        cursor.close()
        return {'employees' : res}


@app.route('/count', methods=['GET', 'POST'])
def countOfEmployees():
    if request.method == 'GET':
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ SELECT COUNT(id) AS count FROM employees """
        )
        res = cursor.fetchone()
        return { 'count' : res }
    elif request.method == 'POST':
        operation = request.json['operation']
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ SELECT COUNT(id) AS count FROM employees WHERE department = %s OR gender = %s """, (operation, operation)
        )
        res = cursor.fetchone()
        return { 'count' : res }
        