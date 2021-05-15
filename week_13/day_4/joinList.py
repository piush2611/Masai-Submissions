ip = input("Please enter the list of strings seperated by space : ") 
char = input("Please enter the character : ")
li = ip.split(" ")
str = ""

for i in range(len(li)):
    if i == (len(li)-1):
        str+= li[i]
    else:
        str+= li[i] + char
    

print(str)