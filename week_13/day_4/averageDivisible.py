limit = int(input("Please enter the limit : "))
num = int(input("Please enter the number : "))
sum = 0
count = 0

for i in range(0,limit):
    if i % num == 0:
        sum = sum + i
        count = count + 1

avg = sum/count
print(avg)