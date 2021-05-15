from flask import Blueprint, request, json
from server import mysql
from helper import getData, getUser, decodeToken, getToken
task = Blueprint('task', __name__)


@task.route('/create', methods=['POST'])
def createTask():
    task = request.json['task']
    authHeader = request.headers.get('Authorization')
    tokenEncoded = authHeader.split(' ')[1]
    token = decodeToken(tokenEncoded)
    user = getUser(token)
    userId = user['id']
    listId = request.json['listId']

    cursor = mysql.connection.cursor()
    cursor.execute(
        """ INSERT INTO tasks ( task, listId, userId ) VALUES (%s, %s, %s) """, (task, listId, userId)
    )
    mysql.connection.commit()
    cursor.close()

    return { 'message' : "Task added"}

@task.route('/read', methods=['POST'])
def readTasks():
    listId = request.json['listId']
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ SELECT id, task, listId FROM tasks WHERE listId = %s """, (listId,)
    )
    result = cursor.fetchall()
    cursor.close()

    return { 'tasks' : getData(result) }

@task.route('/delete/<int:id>', methods=['DELETE'])
def deleteTask(id):
    authHeader = request.headers.get('Authorization')
    user = getToken(authHeader)
    userId = user['id']

    cursor = mysql.connection.cursor()
    cursor.execute(
        """ DELETE FROM tasks WHERE id = %s AND userid = %s """, (id, userId)
    )
    mysql.connection.commit()
    cursor.close()

    return { 'message' : "Task deleted"}

@task.route('/update/<int:id>', methods=['PUT'])
def updateTask(id):
    authHeader = request.headers.get('Authorization')
    user = getToken(authHeader)
    userId = user['id']
    task = request.json['task']

    cursor = mysql.connection.cursor()
    cursor.execute(
        """ UPDATE tasks SET task = %s WHERE id = %s AND userId = %s """, (task, id, userId)
    )
    mysql.connection.commit()
    cursor.close()

    return { 'message' : "Task updated "}

@task.route('/read/<int:id>')
def readTask(id):

    cursor = mysql.connection.cursor()
    cursor.execute(
        """ SELECT task FROM tasks WHERE id = %s """, (id,)
    )
    result = cursor.fetchone()
    cursor.close()

    return { 'task' : getData(result) }
