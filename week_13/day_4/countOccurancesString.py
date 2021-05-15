string = input("Please enter the string : ")

dictionary = {}

for i in string:
    if i in dictionary:
        dictionary[i] += 1
    else:
        dictionary[i] = 1


for k,v in dictionary.items():
    print(k, v)