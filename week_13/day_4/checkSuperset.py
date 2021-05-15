set2 = {1,2,3,4,5}
set1 = {2,1,3,4}
count = 0 

if len(set1) >= len(set2):
    for i in set2:
         for j in set1:
             if i == j:
                 count += 1

if len(set2) == count:
    print("Set1 is superset of set2")
else:
    print("Set1 is not superset of set2")