import csv

username = input("Please enter the username : ")
password = input("Please enter the password : ")

def writeCsv(username, password):
    flag = True
    with open("users.csv") as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            if row['username'] == username:
                print("User already exists")
                flag = False
                break
            
    with open("users.csv", "w") as csvfile:
        if flag:
            fieldnames = [ "username", "password"]
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerow({ 'username': username, 'password': password})
            print("Registration successfull")
    
    

        
writeCsv(username, password)