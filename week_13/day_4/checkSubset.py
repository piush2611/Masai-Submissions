set1 = {1,2,3,4,5,12}
set2 = {1,2,3,4,5,6,7,8}
count = 0

for i in set1:
    for j in set2:
        if i == j:
            count += 1

if len(set1) == count:
    print("Set1 is subset of set2")
else:
    print("Set1 is not a subset of set2")