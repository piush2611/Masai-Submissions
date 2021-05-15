from flask import Flask, request, json
from flask_mysqldb import MySQL
import jwt
from helper import *

app = Flask(__name__)
mysql = MySQL(app)
app.config['MYSQL_USER'] = "charlie"
app.config['MYSQL_PASSWORD'] = "charlie"
app.config['MYSQL_DB'] = 'musicAlbums'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

from blueprintAlbum import album
from blueprintArtist import artist

app.register_blueprint(artist, url_prefix='/artist')
app.register_blueprint(album, url_prefix='/album')

@app.route('/read')
def home():
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ SELECT albums.id as id,  artistName, albumName, year FROM artists JOIN albums ON artists.id = albums.artistId  LIMIT 10 """
    )
    res = cursor.fetchall()
    cursor.close()
    return {'albums' : res }
    

@app.route('/register', methods=['POST'])
def register():
    username = request.json['username']
    email = request.json['email']
    password = request.json['password']
    salt = generateSalt()
    passwordHash = multiHashing(password, salt)
    admin = request.json['admin']

    cursor = mysql.connection.cursor()
    cursor.execute(
        """ INSERT INTO users (username, email, passwordHash, salt, admin) VALUES (%s, %s, %s, %s, %s) """, (username, email, passwordHash, salt, admin )
    )
    mysql.connection.commit()
    cursor.close()
    return { 'message' : 'User created '}

@app.route('/login', methods=['POST'])
def login():
    username = request.json['username']
    password = request.json['password']
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ SELECT id, salt, passwordHash, admin FROM users WHERE username = %s """, (username, )
    )
    res = cursor.fetchone()
    cursor.close()
    if res['admin'] != 0 :
        admin = True
    else:
        admin = False
    passwordHash = multiHashing(password, res['salt'])
    if passwordHash == res['passwordHash'] :
        token = jwt.encode({"id" : res['id']}, "charlie", algorithm='HS256' )
        return { "message" : 'Login successfull', "token" : token, 'isAdmin' : admin}
    else:
        return {"message" : 'Invlaid login credentials', "error" : True}

@app.route('/filter', methods=['POST'])
def filterByArtist():
    artist = request.json['artistName']
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ SELECT albums.id as id, artistName, albumName, year FROM artists JOIN albums ON artists.id = albums.artistId WHERE artistName = %s LIMIT 10 """, (artist,)
    )

    res = cursor.fetchall()
    cursor.close()
    return {'albums' : res }

@app.route('/sort', methods=['POST'])
def sortByYear():
    order = request.json['order']
    cursor = mysql.connection.cursor()
    if order == "desc" :
        cursor.execute(
        """ SELECT albums.id as id, artistName, albumName, year FROM artists JOIN albums ON artists.id = albums.artistId ORDER BY year LIMIT 10 """
        )
    else :
        cursor.execute(
            """ SELECT albums.id as id, artistName, albumName, year FROM artists JOIN albums ON artists.id = albums.artistId ORDER BY year DESC LIMIT 10 """
        )
    res = cursor.fetchall()
    cursor.close()
    return { 'albums' : res }

