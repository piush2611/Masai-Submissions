ip = input("Please enter the list of numbers seperated with space : ")
li = ip.split(' ')
sum = 0

for i in li:
    if int(i) % 2 == 0:
        sum += int(i)

print(sum)