from flask import Blueprint
from flask import request
import csv
import os
import json

user = Blueprint('user', __name__)

def getNextId(csvUrl):
    with open('data/' + csvUrl) as data:
        readData = csv.DictReader(data)
        id = 0
        for row in readData:
            id = row['id']
    return id

@user.route('/listing')
def listing():
    database = []
    with open('data/users.csv') as usersDb:
        readData = csv.DictReader(usersDb)
        for row in readData:
            database.append(row)
    return json.dumps(database)

@user.route('/create', methods = ['POST'])
def create():
    name = request.json['name']
    mobile = request.json['mobile']
    email = request.json['email']

    if os.path.exists('data/users.csv'):
        nextId = int(getNextId('users.csv')) + 1
        with open('data/users.csv', 'a') as usersDb:
            fieldnames = ['id', 'name', 'mobile', 'email']
            appendData = csv.DictWriter(usersDb, fieldnames = fieldnames)
            appendData.writerow({ 'id' : nextId, 'name' : name, 'mobile' : mobile, 'email' : email})
        return 'Data added, your user-id is ' + str(nextId) + " (take a note of your user-id, you will need it)"
    else:
        with open('data/users.csv', 'w') as usersDb:
            fieldnames = ['id', 'name', 'mobile', 'email']
            writeData = csv.DictWriter(usersDb, fieldnames = fieldnames)
            writeData.writeheader()
            writeData.writerow({ 'id' : 1, 'name' : name, 'mobile' : mobile, 'email' : email})
    return 'Data added, your user-id is ' + str(1) + " (take a note of your user-id, you will need it)"

@user.route('/edit/<int:id>', methods = ['PUT'])
def edit(id):
    name = request.json['name']
    mobile = request.json['mobile']
    email = request.json['email']
    data = []
    with open('data/users.csv') as usersDb:
        readData = csv.DictReader(usersDb)
        index = 0
        count = 0
        for row in readData:
            if int(row['id']) != id:
                data.append(row)
            count += 1
            if int(row['id']) == id:
                index = count - 1
        data.insert(index, {'id': id, 'name' : name, 'mobile' : mobile, 'email' : email})

    with open('data/users.csv', 'w') as usersDb:
        fieldnames = ['id', 'name', 'mobile', 'email']
        writeData = csv.DictWriter(usersDb, fieldnames = fieldnames)
        writeData.writeheader()
        for row in data:
            writeData.writerow(row)
    return 'user-data updated'

@user.route('/delete/<int:id>', methods = ['DELETE'])
def delete(id):
    userData = []
    addressData = []
    with open('data/users.csv') as usersDb:
        readData = csv.DictReader(usersDb)
        for row in readData:
            if int(row['id']) != id:
                userData.append(row)
    
    with open('data/addresses.csv') as addressDb:
        readData = csv.DictReader(addressDb)
        for row in readData:
            if int(row['userId']) != id:
                addressData.append(row)
    
    with open('data/users.csv', 'w') as usersDb:
        fieldnames = ['id', 'name', 'mobile', 'email']
        writeData = csv.DictWriter(usersDb, fieldnames = fieldnames)
        writeData.writeheader()
        for row in userData:
            writeData.writerow(row)
    
    with open('data/addresses.csv', 'w') as addressDb:
        fieldnames = ['id', 'userId','line1', 'line2', 'city', 'pincode']
        writeData = csv.DictWriter(addressDb, fieldnames = fieldnames)
        writeData.writeheader()
        for row in addressData:
            writeData.writerow(row)

    return 'user deleted'