from flask import Blueprint
import jwt
from flask import request, make_response, jsonify
import os
import hashlib
import jwt
from server import mysql
from helper import md5_hash, generateSalt, multiHashing, decodeToken, getUser, getData

blog = Blueprint("blog", __name__)

@blog.route('/create', methods=['POST'])
def createBlog():
    authHeader = request.headers.get('Authorization')
    tokenEncoded = authHeader.split(' ')[1]
    userId = int(decodeToken(tokenEncoded))
    user = getUser(userId)
    username = user[0]['username']
    print(username)
    title = request.json['title']
    blog = request.json['blog']
    category = request.json['category']

    cursor = mysql.connection.cursor()
    cursor.execute(
        """INSERT INTO blogs2 (userId, title, blog, category, username)
        VALUES (%s, %s, %s, %s, %s) """, (userId, title, blog, category, username) 
        )
    mysql.connection.commit()
    cursor.close()
    return {"message": "blog created"}

@blog.route('/update/<int:id>', methods=['PUT'])
def updateBlog(id):
    authHeader = request.headers.get('Authorization')
    tokenEncoded = authHeader.split(' ')[1]
    userId = decodeToken(tokenEncoded)

    title = request.json['title']
    blog = request.json['blog']
    category = request.json['category']
    cursor = mysql.connection.cursor()
    cursor.execute(
        """UPDATE blogs2 SET title = %s, blog = %s, category = %s  WHERE id = %s AND userId = %s """, (title, blog, category, id, userId) 
        )
    mysql.connection.commit()
    cursor.close()
    return {"message": "blog updated"}

@blog.route('/delete/<int:id>', methods=['DELETE'])
def deleteBlog(id):
    authHeader = request.headers.get('Authorization')
    tokenEncoded = authHeader.split(' ')[1]
    userId = decodeToken(tokenEncoded)

    cursor = mysql.connection.cursor()
    cursor.execute(
        """DELETE FROM blogs2 WHERE id = %s AND userId = %s  """, (id, userId) 
        )
    mysql.connection.commit()
    cursor.close()
    return {"message": "blog deleted"}

@blog.route('/read', methods=['GET'])
def userBlogs():
    authHeader = request.headers.get('Authorization')
    tokenEncoded = authHeader.split(' ')[1]
    token = decodeToken(tokenEncoded)
    user = getUser(token)
    userId = user[0]['id']
    cursor = mysql.connection.cursor()  

    cursor.execute(
        """ SELECT * FROM blogs2 WHERE userId = %s """, (userId,)
    )
    results = cursor.fetchall()
    cursor.close()
    return { "blogs" : getData(results) }


