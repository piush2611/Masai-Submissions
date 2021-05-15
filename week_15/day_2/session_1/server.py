from flask import Flask
app = Flask(__name__)
import csv
from flask import request
import json
   
@app.route('/listing')
def listing():   
    with open("data/groceries.csv") as grocery:
        readData = csv.DictReader(grocery)
        dataDict = {
            'data' : [],
            'headers' : ['item', 'quantity', 'purchased']
        }
        for row in readData:
            dataDict['data'].append({ 'item' : row['item'], 'quantity' : row['quantity'], 'purchased' : row['purchased'] })
        return json.dumps(dataDict)

@app.route('/create', methods = ['POST'])
def create():
    with open('data/groceries.csv', 'a') as groceryData:
        fieldnames = ['item', 'quantity', 'purchased']
        writeData = csv.DictWriter(groceryData, fieldnames=fieldnames)
        item = request.json['item']
        quantity = request.json['quantity']
        writeData.writerow({'item' : item, 'quantity': quantity, 'purchased': False})
        return 'Successfully added'

@app.route('/edit/<int:itemNo>', methods = ['POST'])
def edit(itemNo):
    with open('data/groceries.csv') as groceryData:
        readData = csv.DictReader(groceryData)
        count = 0
        item = request.json['item']
        qty = request.json['quantity']
        dataList = []
        for row in readData:
            if count != itemNo:
                dataList.append({ 'item' : row['item'], 'quantity' : row['quantity'], 'purchased' : 'False'})
            count += 1
        dataList.insert(itemNo, { 'item' : item, 'quantity' : qty, 'purchased' : 'False'})

    with open('data/groceries.csv', 'w') as groceryData:
        fieldnames = ['item', 'quantity', 'purchased']
        writeData = csv.DictWriter(groceryData, fieldnames = fieldnames)
        writeData.writeheader()
        for row in dataList:
            writeData.writerow({ 'item' : row['item'], 'quantity' : row['quantity'], 'purchased' : row['purchased']})

    return 'Data updated successfully'
        

@app.route('/delete', methods = ['POST'])
def delete():
    dataDict = {
        "dataList" : []
    }
    with open('data/groceries.csv') as groceryData:
        readData = csv.DictReader(groceryData)
        count = 0
        itemNo = int(request.json['itemNo'])
        for row in readData:
            if count != itemNo:
                dataDict["dataList"].append({ 'item' : row['item'], 'quantity' : row['quantity'], 'purchased' : row['purchased']})
            count += 1

    with open('data/groceries.csv', 'w') as groceryData:
        fieldnames = ['item', 'quantity', 'purchased']
        writeData = csv.DictWriter(groceryData, fieldnames = fieldnames)
        writeData.writeheader()
        for row in dataDict["dataList"]:
            writeData.writerow({ 'item' : row['item'], 'quantity' : row['quantity'], 'purchased' : row['purchased']})
    return "Data deleted successfully"

@app.route('/purchased', methods = ['POST', 'GET'])
def markPurchased():
    dataList = []
    if request.method == "POST":
        with open('data/groceries.csv') as groceryData:
            readData = csv.DictReader(groceryData)
            count = 0
            itemNo = int(request.json['itemNo'])
            itemPurchased = []
            for row in readData:
                if count != itemNo: 
                    dataList.append({ 'item' : row['item'], 'quantity' : row['quantity'], 'purchased' : row['purchased']})
                elif count == itemNo:
                    itemPurchased.append({ 'item': row['item'], 'quantity': row['quantity'], 'purchased': row['purchased']})
                count += 1
            dataList.insert(itemNo, { 'item' : itemPurchased[0]['item'], 'quantity' : itemPurchased[0]['quantity'], 'purchased' : 'True'})
        
        with open('data/groceries.csv', 'w') as groceryData:
            fieldnames = ['item', 'quantity', 'purchased']
            writeData = csv.DictWriter(groceryData, fieldnames = fieldnames)
            writeData.writeheader()
            for row in dataList:
                writeData.writerow({ 'item' : row['item'], 'quantity' : row['quantity'], 'purchased' : row['purchased']})
        return 'Item purchased'
    else:
        with open('data/groceries.csv') as groceryData:
            readData = csv.DictReader(groceryData)
            dataList = []
            for row in readData:
                if row['purchased'] == 'True':
                    dataList.append({ 'item' : row['item'], 'quantity' : row['quantity'], 'purchased' : row['purchased']})
        return json.dumps(dataList)
