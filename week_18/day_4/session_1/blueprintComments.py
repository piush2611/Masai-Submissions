from flask import Blueprint
from flask import request, make_response, jsonify
import os
import hashlib
import jwt
from server import mysql
from helper import md5_hash, generateSalt, multiHashing, decodeToken, getUser, getData

comment = Blueprint("comment", __name__)

@comment.route('/create', methods=['POST'])
def createComment():
    authHeader = request.headers.get('Authorization')
    tokenEncoded = authHeader.split(' ')[1]
    token = decodeToken(tokenEncoded)
    user = getUser(token)
    username = user[0]['username']
    blogId = request.json['blogId']
    comment = request.json['comment']

    cursor = mysql.connection.cursor()
    cursor.execute(
        """INSERT INTO comments2 (blogId, comment, username)
        VALUES (%s, %s, %s) """, (blogId, comment, username ) 
        )
    mysql.connection.commit()
    cursor.close()
    return {"message": "comment created"}

@comment.route('/update/<int:id>', methods=['PUT'])
def updateComment(id):
    # authHeader = request.headers.get('Authorization')
    # tokenEncoded = authHeader.split(' ')[1]

    comment = request.json['comment']
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ UPDATE comments2 SET comment = %s WHERE id = %s """, (comment, id)
    )
    mysql.connection.commit()
    cursor.close()
    return { "message" : "Comment updated"}


@comment.route('/delete/<int:id>', methods=['DELETE'])
def deleteComment(id):
    # authHeader = request.headers.get('Authorization')
    # tokenEncoded = authHeader.split(' ')[1]

    cursor = mysql.connection.cursor()
    cursor.execute(
        """ DELETE FROM comments2 WHERE id = %s """, (id,)
    )
    mysql.connection.commit()
    cursor.close()

    return { "message" : "Comment deleted" }

@comment.route('/read/<int:id>')
def sendComment(id):
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ SELECT * FROM comments2 WHERE id = %s """, (id,)
    )

    results = cursor.fetchall()
    cursor.close()
    return {"comments" : getData(results) }