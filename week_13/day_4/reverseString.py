string = input("Please enter the string : ")

for i in range(len(str)-1,-1,-1):
    reverseStr+=str[i]


print(reverseStr)