set1 = {1,2,3,4,5,7}
set2 = {2,3,4,6,7,8}
set3 = set()

for i in set1:
    flag = False
    for j in set2:
        if i == j:
            flag= True
            break
    if flag:
        set3.add(i) 


print(set3)


