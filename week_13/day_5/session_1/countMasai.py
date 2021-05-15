rawData = open("random_ids.txt")
count = 0
for i in rawData:
    count += i.count("masai")

print(count)
rawData.close()