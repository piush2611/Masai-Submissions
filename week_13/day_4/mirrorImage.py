lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

ip = input("Please enter the string : ")
op = ""

for i in ip:
    for j in range(len(lowerCase)):
        if i == lowerCase[j]:
            op += lowerCase[25-j]
        elif i == upperCase[j]:
            op += upperCase[25-j]

print(op)