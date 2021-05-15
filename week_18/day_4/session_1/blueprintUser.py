from flask import Blueprint
from flask import request, make_response, jsonify
import os
import hashlib
import jwt
from server import mysql
from helper import generateSalt, multiHashing, decodeToken, getUser, getData, md5_hash

user = Blueprint( "user", __name__)

@user.route('/create', methods=['POST'])
def create():
    username = request.json['username']
    email = request.json['email']
    password = request.json['password']
    salt = generateSalt()
    passwordHash = multiHashing(password, salt)

    cursor = mysql.connection.cursor()
    cursor.execute(
        """INSERT INTO users (username, email, salt, passwordHash)
        VALUES (%s, %s, %s, %s) """, (username, email, salt, passwordHash) 
        )
    mysql.connection.commit()
    cursor.close()
    return {"message": "user created" }

@user.route('/login', methods=['POST'])
def login():
    email = request.json['email']
    password = request.json['password']

    cursor = mysql.connection.cursor()
    cursor.execute(
        """ SELECT * FROM users WHERE email = %s """, (email,)
    )
    results = cursor.fetchall()
    cursor.close()
    items = getData(results)
    passwordHash = multiHashing(password, items[0]['salt'])

    if passwordHash == items[0]['passwordHash'] :
        token = jwt.encode({ "id" : items[0]['id']}, 'charlie', algorithm='HS256')
        return { 'error' : False, 'token' : token}
        
    return { 'error' : True, 'message' : "Invalid credentials" }


@user.route('/details')
def details():
    authHeader = request.headers.get('Authorization')
    tokenEncoded = authHeader.split(' ')[1]
    id = decodeToken(tokenEncoded)

    cursor = mysql.connection.cursor()
    cursor.execute(
        """ SELECT username FROM users WHERE id = %s """, (id,)
    )
    results = cursor.fetchall()
    cursor.close()
    return {"user" : getData(results)}

