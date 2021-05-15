from flask import Blueprint
from flask import request
import hashlib
import os
import json
import csv

auth = Blueprint('auth', __name__)

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

def exists(email):
    with open('data/users.csv') as data:
        users = csv.DictReader(data)
        for user in users:
            if user['email'] == email:
                return False
        return True

def nextId():
    with open('data/users.csv') as data:
        users = csv.DictReader(data)
        id = 0
        for user in users:
            id = user['id']
    return id

@auth.route('/signup', methods=['POST'])
def register():
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    salt = generateSalt()
    passwordHash = multiHashing(password, salt)

    if os.path.exists('data/users.csv'):
        if exists(email):
            id = int(nextId()) + 1
            with open('data/users.csv', 'a') as data:
                fieldnames = ['id', 'name', 'email', 'salt', 'passwordHash']
                users = csv.DictWriter(data, fieldnames = fieldnames)
                newUser = { 'id' : id, 'name' : name, 'email' : email, 'salt': salt, 'passwordHash' : passwordHash }
                users.writerow(newUser)
            return 'Registration successfull'
        else:
            return 'User already exists'

    else:
        with open('data/users.csv', 'w') as data:
            fieldnames = ['id', 'name', 'email', 'salt','passwordHash']
            users = csv.DictWriter(data, fieldnames = fieldnames)
            users.writeheader()
            newUser = { 'id' : 1, 'name' : name, 'email' : email, 'salt': salt, 'passwordHash' : passwordHash }
            users.writerow(newUser)
        return 'Registration successfull'
    
@auth.route('/login', methods=['POST'])
def login():
    email = request.json['email']
    password = request.json['password']

    with open('data/users.csv') as data:
        users = csv.DictReader(data)
        for user in users:
            if user['email'] == email :
                passwordHash = multiHashing(password, user['salt'])
                if passwordHash == user['passwordHash']:
                    return 'Login successfull'
    return 'Invalid login details'
