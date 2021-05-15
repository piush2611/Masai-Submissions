from flask import Blueprint, request, json
from server import mysql

employee = Blueprint('employee', __name__)

@employee.route('/create', methods=['POST'])
def create():
    name = request.json['name']
    gender = request.json['gender']
    dept = request.json['department']
    salary = request.json['salary']

    cursor = mysql.connection.cursor()
    cursor.execute(
        """ INSERT INTO employees ( name, gender, department, salary) VALUES (%s, %s, %s, %s) """, (name, gender, dept, salary)
    )
    mysql.connection.commit()
    cursor.close()

    return { 'message' : "Employee added", 'error' : False }

@employee.route('/delete/<int:id>', methods=['DELETE'])
def delete(id):
    if request.method == 'DELETE':
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ DELETE FROM  employees WHERE id = %s """, (id,)
        )
        mysql.connection.commit()
        cursor.close()

        return { 'message' : "Employee deleted", 'error' : False }
    else:
        return {}

@employee.route('/update/<int:id>', methods=['PUT'])
def update(id):
    if request.method == 'PUT':
        name = request.json['name']
        gender = request.json['gender']
        dept = request.json['department']
        salary = request.json['salary']

        cursor = mysql.connection.cursor()
        cursor.execute(
            """ UPDATE employees SET name = %s, gender = %s, department = %s, salary = %s WHERE id = %s """, (name, gender, dept, salary, id)
        )
        mysql.connection.commit()
        cursor.close()

        return { 'message' : "Employee data updated", 'error' : False }
    else:
        return {}

@employee.route('/read/<int:id>', methods=['GET'])
def read(id):
    if request.method == 'GET':
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ SELECT * FROM  employees WHERE id = %s """, (id,)
        )
        res = cursor.fetchone()
        cursor.close()

        return { 'employee' : res, 'error' : False }
    else:
        return {}

@employee.route('/departments', methods=['GET'])
def getDepartments():
    if request.method == 'GET':
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ SELECT GROUP_CONCAT(DISTINCT(department)) AS dept FROM  employees """
        )
        res = cursor.fetchall()
        cursor.close()

        return { 'departments' : res, 'error' : False }
    else:
        return {}