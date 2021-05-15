string = input("Please enter the string : ")
splitCharacter = input("Please enter the split character : ")
li = []
subStr = ""
for char in string:
    if char == splitCharacter:
        li.append(subStr)
        subStr = ""
    else:
        subStr+=char

print(li)
