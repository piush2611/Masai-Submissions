import hashlib, jwt, os
# from server import mysql

def md5Hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    return hash.hexdigest()

def generateSalt():
    salt = os.urandom(16)
    return salt.encode('base-64')

def multiHashing(password, salt):
    string = password + salt
    for i in range(60):
        string = md5Hash(string)
    return string

def decodeToken(token):
    decodeT = jwt.decode(token, 'charlie', algorithms=['HS256'])
    id = decodeT['id']
    return id

def getToken(headers):
    tokenEncoded = headers.split(' ')[1]
    token = decodeToken(tokenEncoded)
    user = getUser(token)
    return user