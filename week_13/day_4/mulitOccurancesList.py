ip = input("Please enter the list items separated by space : ")
li = ip.split()
dictionary = {}

for i in li:
    if i in dictionary:
        dictionary[i] += 1
    else:
        dictionary[i] = 1

for k,v in dictionary.items():
    if v > 1:
        print(k)