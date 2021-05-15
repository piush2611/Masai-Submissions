set1 = {4,5,1}
set2 = {1,2,3}
flag = True

for i in set1:
    for j in set2:
        if i == j:
            flag = False
            break

if flag:
    print("Set's are disjoint")
else:
    print("Set's are joint")




