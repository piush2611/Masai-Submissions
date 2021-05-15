set1 = {1,2,3,4,7,8}
set2 = {2,3,5,6}
set3 = set()

for i in set1:
    flag = True
    for j in set2:
        if i == j:
            flag = False
    if flag:
        set3.add(i)


print(set3)



