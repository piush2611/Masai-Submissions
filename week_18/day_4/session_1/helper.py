import jwt
import json
import os
import hashlib
from server import mysql

def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    return hash.hexdigest()

def generateSalt():
    salt = os.urandom(16)
    return salt.encode('base-64')

def multiHashing(password, salt):
    string = password + salt
    for i in range(100):
        string = md5_hash(string)
    return string

def decodeToken(token):
    decode = jwt.decode(token, 'charlie', algorithms=['HS256'])
    id = decode['id']
    return id

def getUser(id):
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ SELECT * FROM users WHERE id = %s """, (id,)
    )
    user = cursor.fetchall()
    cursor.close()
    return user

def getData(data):
    items = []
    for item in data:
        items.append(item)
    return items