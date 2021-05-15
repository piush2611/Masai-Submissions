from flask import Flask
app = Flask(__name__)
from flask import request
import json
import csv

#  listing route
@app.route('/users/listing')
def listing():
    with open('data/users.csv') as usersDb:
        fieldnames = ['id', 'name', 'email', 'mobile', 'age']
        readData = csv.DictReader(usersDb, fieldnames = fieldnames)
        dictData = {
            'data': []
        }

        for row in readData:
            if row['id'] != "id":
                dictData['data'].append({'id' : row['id'], 'name' : row['name'], 'email' : row['email'], 'mobile' : row['mobile'], 'age' : row['age']})

        return json.dumps(dictData)

# create route
@app.route('/users/create', methods = ['POST'])
def create():
    with open('data/users.csv', 'a') as usersDb:
        fieldnames = ['id', 'name', 'email', 'mobile', 'age']
        writeData = csv.DictWriter(usersDb, fieldnames = fieldnames)
        id = request.json['id']
        name = request.json['name']
        email = request.json['email']
        mobile = request.json['mobile']
        age = request.json['age']
        writeData.writerow({ 'id' : id, 'name' : name, 'email' : email, 'mobile' : mobile, 'age' : age})

        return 'Data added successfully'

# edit route 
@app.route('/users/edit/<int:id>', methods = ['PUT'])
def edit(id):
    database = []
    with open('data/users.csv') as usersDb:
        readData = csv.DictReader(usersDb)
        idNum = request.json['id']
        name = request.json['name']
        email = request.json['email']
        mobile = request.json['mobile']
        age = request.json['age']
        for row in readData:
            if int(row['id']) != id:
                database.append({ 'id' : row['id'], 'name' : row['name'], 'email' : row['email'], 'mobile' : row['mobile'], 'age' : row['age'] })
        database.insert((int(id)-1), { 'id' : idNum, 'name' : name, 'email' : email, 'mobile' : mobile, 'age' : age})
    
    with open('data/users.csv', 'w') as usersDb:
        fieldnames = ['id', 'name', 'email', 'mobile', 'age']
        writeData = csv.DictWriter(usersDb, fieldnames = fieldnames)
        writeData.writeheader()
        for row in database:
            writeData.writerow(row)

    return 'Data updated successfully'

# delete route
@app.route('/users/delete/<int:id>', methods = ['DELETE'])
def delete(id):
    database = []
    with open('data/users.csv') as usersDb:
        readData = csv.DictReader(usersDb)
        for row in readData:
            if int(row['id']) != id:
                database.append({ 'id' : row['id'], 'name' : row['name'], 'email' : row['email'], 'mobile' : row['mobile'], 'age' : row['age'] })
    
    with open('data/users.csv', 'w') as usersDb:
        fieldnames = ['id', 'name', 'email', 'mobile', 'age']
        writeData = csv.DictWriter(usersDb, fieldnames = fieldnames)
        writeData.writeheader()
        for row in database:
            writeData.writerow(row)

    return 'Data deleted successfully '

# show route
@app.route('/users/show/<int:id>')
def show(id):
    user = []
    with open('data/users.csv') as usersDb:
        readData = csv.DictReader(usersDb)
        for row in readData:
            if int(row['id']) == id:
                user.append({ 'id' : row['id'], 'name' : row['name'], 'email' : row['email'], 'mobile' : row['mobile'], 'age' : row['age'] })

    return json.dumps(user)