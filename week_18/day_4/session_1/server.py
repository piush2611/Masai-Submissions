from flask import Flask
import jwt
import json
import os
import hashlib
from flask import request, make_response, jsonify
from flask_mysqldb import MySQL
app = Flask(__name__)

app.config['MYSQL_USER'] = 'charlie'
app.config['MYSQL_PASSWORD'] = 'charlie'
app.config['MYSQL_DB'] = 'blogApplication'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)

from helper import md5_hash, generateSalt, multiHashing, decodeToken, getUser, getData
from blueprintUser import user
from blueprintComments import comment
from blueprintBlog import blog
app.register_blueprint(user, url_prefix='/user')
app.register_blueprint(blog, url_prefix='/user/blog')
app.register_blueprint(comment, url_prefix='/user/blog/comment')

@app.route('/blog/read')
def read():
    cursor = mysql.connection.cursor()

    cursor.execute(
        """ SELECT id, title, category, username, blog FROM blogs2 """
    )

    results = cursor.fetchall()
    cursor.close()
    return { "blogs": getData(results) }

@app.route('/blog/read/<int:id>')
def readBlog(id):
    cursor = mysql.connection.cursor()  

    cursor.execute(
        """ SELECT * FROM blogs2 WHERE id = %s """, (id,)
    )

    results = cursor.fetchall()
    cursor.close()
    return { "blog" : getData(results) }


@app.route('/blog/comment/read/<int:id>')
def readComment(id):
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ SELECT * FROM comments2 WHERE blogId = %s """, (id,)
    )

    results = cursor.fetchall()
    cursor.close()
    return {"comments" : getData(results) }