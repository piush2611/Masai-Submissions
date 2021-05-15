from flask import Blueprint, request, json
from server import mysql
from helper import decodeToken, getUser, getData, getToken

list = Blueprint("list", __name__)

@list.route('/create', methods=['POST'])
def createList():
    authHeader = request.headers.get('Authorization')
    tokenEncoded = authHeader.split(' ')[1]
    token = decodeToken(tokenEncoded)
    user = getUser(token)
    userId = user['id']
    listname = request.json['listname']
    taskArr = request.json['taskArr']

    cursor = mysql.connection.cursor()
    cursor.execute(
        """ INSERT INTO list (listname, userId) VALUES (%s, %s) """, (listname, userId)
    )

    cursor.execute( """ SELECT id, listname FROM list WHERE listname = %s """, ( listname, ) )

    result = cursor.fetchone() 
    mysql.connection.commit()
    

    for task in taskArr :
        cursor.execute(
            """ INSERT INTO tasks ( task, listId, userId ) VALUES (%s,  %s, %s) """, (task, result['id'], userId)
        )
    
    mysql.connection.commit()
    cursor.close()

    return { "message" : "List and tasks created"}


@list.route('/read')
def read():
    authHeader = request.headers.get('Authorization')
    tokenEncoded = authHeader.split(' ')[1]
    token = decodeToken(tokenEncoded)
    user = getUser(token)
    userId = user['id']

    cursor = mysql.connection.cursor()

    cursor.execute(
        """ SELECT list.id AS listId, listname,  COUNT(tasks.id) AS task FROM list JOIN tasks ON list.id = tasks.listId WHERE list.userId = %s GROUP BY list.id """, (userId,)
    )

    result = cursor.fetchall()
    cursor.close()

    return { 'lists' : getData(result) }

@list.route('/delete/<int:id>', methods=['DELETE'])
def deleteList(id):
    authHeader = request.headers.get('Authorization')
    user = getToken(authHeader)
    userId = user['id']

    cursor = mysql.connection.cursor()
    cursor.execute(
        """ DELETE FROM tasks WHERE listId = %s AND userId = %s """, (id, userId)
    )
    cursor.execute(
        """ DELETE FROM list WHERE id = %s AND userId = %s """, (id, userId)
    )
    mysql.connection.commit()
    cursor.close()

    return { "message" : "List Deleted"}

@list.route('/update/<int:id>', methods=['PUT'])
def updateList(id):
    authHeader = request.headers.get('Authorization')
    user = getToken(authHeader)
    userId = user['id']
    listname = request.json['listname']

    cursor = mysql.connection.cursor()
    cursor.execute(
        """ UPDATE list SET listname = %s WHERE id = %s AND userId = %s """, (listname, id, userId) 
    )
    mysql.connection.commit()
    cursor.close()

    return { "message" : "List updated"}

@list.route('/list/<int:id>')
def readList(id):
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ SELECT listname FROM list WHERE id = %s """, (id,)
    )
    result = fetchone()
    cursor.close()

    return { 'list' : getData(result) }

