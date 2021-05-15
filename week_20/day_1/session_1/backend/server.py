from flask import Flask, request, json
from flask_mysqldb import MySQL
app = Flask(__name__)

app.config['MYSQL_USER'] = 'charlie'
app.config['MYSQL_PASSWORD'] = 'charlie'
app.config['MYSQL_DB'] = 'fileBrowser'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)


@app.route('/')
def home():
    path = '/'
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ SELECT id, folderName, path FROM folders WHERE path LIKE %s """, (path,)
    )
    res = cursor.fetchall()
    cursor.close()
    return { 'folders' : res }

@app.route('/read', methods=['POST'])
def folder():
    path = request.json['path']
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ SELECT id, folderName,path FROM folders WHERE path LIKE %s """, (path,)
    )
    res = cursor.fetchall()
    cursor.close()
    return { 'folders' : res }

@app.route('/create', methods=['POST'])
def createFolder():
    path = request.json['path']
    foldername = request.json['folderName']
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ INSERT INTO folders (path, folderName) VALUES (%s, %s) """, (path, foldername,)
    )
    mysql.connection.commit()
    cursor.close()
    return { 'message' : 'Folder created '}

@app.route('/update', methods=['PUT'])
def moveFolder():
    id = request.json['id']
    moveToFolder = request.json['moveToFolder']
    path = request.json['path']
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ UPDATE folders SET path = %s WHERE id = %s """, (path, id)
    )
    mysql.connection.commit()
    cursor.close()
    return { 'message' : 'Folder moved to the given location' }
