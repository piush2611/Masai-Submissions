from flask import Blueprint
from server import mysql
from flask import request, json
from helper import md5_hash, getUser, generateSalt, multiHashing, decodeToken, getToken
import jwt

user = Blueprint( "user", __name__)


@user.route('/register', methods=['POST'])
def register():
    if request.method == 'OPTIONS':
        return {}
    else:
        email = request.json['email']
        username = request.json['username']
        password = request.json['password']
        salt = generateSalt()
        passwordHash = multiHashing(password, salt)

        cursor = mysql.connection.cursor()
        cursor.execute(
            """ INSERT INTO users (username, email, salt, passwordHash) VALUES (%s, %s, %s, %s) """, (username, email, salt, passwordHash)
        )
        mysql.connection.commit()
        cursor.close()
        return { "message" : "User added"}

@user.route('/login', methods=['POST'])
def login():
    email = request.json['email']
    password = request.json['password']

    cursor = mysql.connection.cursor()
    cursor.execute(
        """ SELECT id, salt, passwordHash FROM users WHERE email = %s """, (email,)
    )
    result = cursor.fetchone()
    cursor.close()

    passwordHash = multiHashing(password, result['salt'])

    if passwordHash == result['passwordHash'] :
        token = jwt.encode({ "id" : result['id']}, 'charlie', algorithm='HS256')
        return { 'error' : False, 'token' : token}
        
    return { 'error' : True, 'message' : "Invalid credentials" }


@user.route('/delete', methods = ['DELETE'])
def delete():
    authHeader = request.headers.get('Authorization')
    user = getToken(authHeader)
    userId = user['id']

    cursor = mysql.connection.cursor()

    cursor.execute(
        """ DELETE FROM tasks WHERE userId = %s """, (userId,)
    )
    cursor.execute(
        """ DELETE FROM list WHERE userId = %s """, (userId,)
    )
    cursor.execute(
        """ DELETE FROM users WHERE id = %s """, (userId,)
    )
    mysql.connection.commit()
    cursor.close()

    return { 'message' : "User deleted"}


@user.route('/update', methods=['PUT'])
def update():
    authHeader = request.headers.get('Authorization')
    user = getToken(authHeader)
    userId = user['id']

