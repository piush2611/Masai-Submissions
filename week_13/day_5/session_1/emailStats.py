rawData = open("emails_rand.txt")

uniqueEmailsDict = {}
for i in rawData:
    uniqueEmailsDict[i] = i

print(len(uniqueEmailsDict))

rawData.close()


# finding duplicate emails 
rawData = open("emails_rand.txt")

uniqueEmailsDict = {}
for i in rawData:
    if i in uniqueEmailsDict:
        uniqueEmailsDict[i] += 1
    else: 
        uniqueEmailsDict[i] = 1

rawData2 = open("duplicateEmails.txt", "w")

for k,v in uniqueEmailsDict.items():
    if v > 1:
        rawData2.write(k + str(v) + "\n")

rawData2.close()
rawData.close()