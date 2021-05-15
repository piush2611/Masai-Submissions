import csv

username = input("Please enter the username : ")
password = input("Please enter the password : ")

def login(username, password):
    with open("users.csv") as csvfile:
        read = csv.DictReader(csvfile)
        found = False
        wrongPass = False
        for row in read:
            if row['username'] == username and row['password'] == password:
                found = True
            elif row['username'] == username and row['password'] != password:
                wrongPass = True

        if found:
            print("Login Successfull")
        elif wrongPass:
            print("Wrong password")
        else:
            print("User not found ")

login(username, password)