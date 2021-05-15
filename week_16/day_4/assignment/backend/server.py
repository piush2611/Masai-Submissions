from flask import Flask
from flask import request
app = Flask(__name__)
import csv
import os
import json


def getNextId(csvUrl):
    with open('data/' + csvUrl) as data:
        readData = csv.DictReader(data)
        id = 0
        for row in readData:
            id = row['id']
    return id

@app.route('/users/listing')
def listing():
    database = []
    with open('data/users.csv') as usersDb:
        readData = csv.DictReader(usersDb)
        for row in readData:
            database.append(row)
    return json.dumps(database)

@app.route('/user/<int:id>/addresses/listing')
def listAddressesOfUser(id):
    database = []
    with open('data/addresses.csv') as usersDb:
        readData = csv.DictReader(usersDb)
        for row in readData:
            if int(row['userId']) == id:
                database.append(row)
    return json.dumps(database)

@app.route('/addresses/listing')
def listAddresses():
    database = []
    with open('data/addresses.csv') as addressDb:
        readData = csv.DictReader(addressDb);
        for row in readData:
            database.append(row)
    return json.dumps(database)

@app.route('/users/create', methods = ['POST'])
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
        return 'Data added, your user-id is' + str(nextId) + "(take a note of your user-id, you will need it)"
    else:
        with open('data/users.csv', 'w') as usersDb:
            fieldnames = ['id', 'name', 'mobile', 'email']
            writeData = csv.DictWriter(usersDb, fieldnames = fieldnames)
            writeData.writeheader()
            writeData.writerow({ 'id' : 1, 'name' : name, 'mobile' : mobile, 'email' : email})
    return 'Data added, your user-id is' + str(1) + "(take a note of your user-id, you will need it)"

@app.route('/user/addresses/create', methods = ['POST'])
def address():
    userId = request.json['userId']
    firstLine1 = request.json['firstLine1']
    firstLine2 = request.json['firstLine2']
    firstCity = request.json['firstCity']
    firstPincode = request.json['firstPincode']

    secondLine1 = request.json['secondLine1']
    secondLine2 = request.json['secondLine2']
    secondCity = request.json['secondCity']
    secondPincode = request.json['secondPincode']

    if os.path.exists('data/addresses.csv'):
        with open('data/addresses.csv', 'a') as addressDb:
            nextId = int(getNextId('addresses.csv')) + 1
            fieldnames = ['id', 'userId', 'line1', 'line2', 'city', 'pincode']
            appendData = csv.DictWriter(addressDb, fieldnames = fieldnames)
            appendData.writerow({ 'id' : nextId, 'userId' : userId, 'line1' : firstLine1, 'line2' : firstLine2, 'city' : firstCity, 'pincode' : firstPincode })
            appendData.writerow({ 'id' : (nextId + 1), 'userId' : userId, 'line1' : secondLine1, 'line2' : secondLine2, 'city' : secondCity, 'pincode' : secondPincode })
        return 'Address added !'
    else:
        with open('data/addresses.csv', 'w') as addressDb:
            fieldnames = ['id', 'userId', 'line1', 'line2', 'city', 'pincode']
            writeData = csv.DictWriter(addressDb, fieldnames = fieldnames)
            writeData.writeheader()
            writeData.writerow({ 'id' : 1, 'userId' : userId, 'line1' : firstLine1, 'line2' : firstLine2, 'city' : firstCity, 'pincode' : firstPincode })
            writeData.writerow({ 'id' : 2, 'userId' : userId, 'line1' : secondLine1, 'line2' : secondLine2, 'city' : secondCity, 'pincode' : secondPincode })
        return 'Address added'

@app.route('/user/edit/<int:id>', methods = ['PUT'])
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
    return 'Data updated'

@app.route('/user/delete/<int:id>', methods = ['DELETE'])
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

    return 'Data deleted'

@app.route('/user/addresses/create', methods = ['POST'])
def createNewAddress():
    userId = request.json['userId']
    line1 = request.json['line1']
    line2 = request.json['line2']
    city = request.json['city']
    pincode = request.json['pincode']

    if os.path.exists('data/addresses.csv'):
        with open('data/addresses.csv', 'a') as addressDb:
            nextId = int(getNextId('addresses.csv')) + 1
            fieldnames = ['id', 'userId', 'line1', 'line2', 'city', 'pincode']
            appendData = csv.DictWriter(addressDb, fieldnames = fieldnames)
            appendData.writerow({ 'id' : nextId, 'userId' : userId, 'line1' : line1, 'line2' : line2, 'city' : city, 'pincode' : pincode })
        return 'Address added'


@app.route('/user/addresses/<int:userid>/edit/<int:id>', methods = ['PUT'])
def editAddress(userid,id):
    line1 = request.json['line1']
    line2 = request.json['line2']
    city = request.json['city']
    pincode = request.json['pincode']
    data = []
    index = 0
    count = 0

    with open('data/addresses.csv') as addressDb:
        readData = csv.DictReader(addressDb)
        for row in readData:
            if int(row['id']) != id:
                data.append(row)
            count += 1
            if int(row['id']) == id:
                index = count - 1

        data.insert( index, { 'id' : id, 'userId' : userid, 'line1' : line1, 'line2' : line2, 'city' : city, 'pincode' : pincode } )
    
    with open('data/addresses.csv', 'w') as addressDb:
        fieldnames = ['id', 'userId', 'line1', 'line2', 'city', 'pincode']
        writeData = csv.DictWriter(addressDb, fieldnames = fieldnames)
        writeData.writeheader()
        for row in data:
            writeData.writerow(row)
    return 'Address updated'

@app.route('/user/addresses/<int:userid>delete/<int:id>', methods = ['DELETE'])
def deleteAddress(userid,id):
    data = []
    with open('data/addresses.csv') as addressDb:
        readData = csv.DictReader(addressDb)
        for row in readData:
            if int(row['id']) != id:
                data.append(row)

    with open('data/addresses.csv', 'w') as addressDb:
        fieldnames = ['id', 'userId', 'line1', 'line2', 'city', 'pincode']
        writeData = csv.DictWriter(addressDb, fieldnames = fieldnames)
        writeData.writeheader()
        for row in data:
            writeData.writerow(row)
    return ' Address Deleted '