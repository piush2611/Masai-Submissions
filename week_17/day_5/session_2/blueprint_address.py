from flask import Blueprint
from flask import request
import csv
import os
import json

addressBook = Blueprint('addressBook', __name__)

def getNextId(csvUrl):
    with open('data/' + csvUrl) as data:
        readData = csv.DictReader(data)
        id = 0
        for row in readData:
            id = row['id']
    return id

@addressBook.route('/listing/<int:id>')
def listAddressesOfUser(id):
    database = []
    with open('data/addresses.csv') as usersDb:
        readData = csv.DictReader(usersDb)
        for row in readData:
            if int(row['userId']) == id:
                database.append(row)
    return json.dumps(database)

@addressBook.route('/listing')
def listAddresses():
    database = []
    with open('data/addresses.csv') as addressDb:
        readData = csv.DictReader(addressDb)
        for row in readData:
            database.append(row)
    return json.dumps(database)

@addressBook.route('/create', methods = ['POST'])
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
    else:
        with open('data/addresses.csv', 'w') as addressDb:
            fieldnames = ['id', 'userId', 'line1', 'line2', 'city', 'pincode']
            writeData = csv.DictWriter(addressDb, fieldnames = fieldnames)
            writeData.writeheader()
            writeData.writerow({ 'id' : 1, 'userId' : userId, 'line1' : line1, 'line2' : line2, 'city' : city, 'pincode' : pincode })
        return 'Address added'


@addressBook.route('/<int:userid>/edit/<int:id>', methods = ['PUT'])
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

@addressBook.route('/<int:userid>/delete/<int:id>', methods = ['DELETE'])
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