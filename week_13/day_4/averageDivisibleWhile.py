limit = int(input("Please enter the limit : "))
num  = int(input("Please enter the number : "))
sum = 0
count = 0
i = 0

while(i < limit):
    if i % num == 0:
        sum+=i
        count+=1 
    i+=1


avg = sum/count

print(avg)