
def countriesCount(data):
    countForIndia = 0
    countForPakistan = 0
    for i in data:
        countForIndia += i.count("India")
        countForPakistan += i.count("Pakistan")
    return "Count of India : " + str(countForIndia) + ", Count for Pakistan : " + str(countForPakistan)

def studentsBelowFifty(data):
    count = 0
    for i in data:
        d = i.split()
        if int(d[0]) < 50:
            count += 1
    return "count of students below fifty is : " + str(count)

def studentsAboveFifty(data):
    count = 0
    for i in data:
        d = i.split()
        if int(d[0]) > 50:
            count += 1
    return  "count of students above fifty is " + str(count)

def exactlyFifty(data):
    countForIndia = 0
    countForPakistan = 0
    for i in data:
        d = i.split()
        if int(d[0]) == 50 and d[1] == "India":
            countForIndia += 1
        elif int(d[0]) == 50 and d[1] == "Pakistan":
            countForPakistan += 1
    return "Count of students from India who scored exactly 50 is " + str(countForIndia) + ", Count of students from Pakistan who scored exactly 50 is " + str(countForPakistan)

# opening files
rawData = open("marks_rand_2000.csv")
rawData2 = open("marksIndia.txt", "w")
rawData3 = open("marksPakistan.txt", "w")
rawData4 = open("marks100.txt", "w")

for i in rawData:
    line = i.split()
    if int(line[0]) == 100:
        rawData4.write(line[2] + "\n")
    elif line[1] == "India":
        rawData2.write(line[0] + " " + line[2] + "\n" )
    elif line[1] == "Pakistan":
        rawData3.write(line[0] + " " + line[2] + "\n") 

# closing files
rawData2.close()
rawData3.close()
rawData4.close()
rawData.close()

rawData = open("marks_rand_2000.csv")
print(countriesCount(rawData))
rawData.close()

rawData = open("marks_rand_2000.csv")
print(studentsBelowFifty(rawData))
rawData.close()

rawData = open("marks_rand_2000.csv")
print(studentsAboveFifty(rawData))
rawData.close()

rawData = open("marks_rand_2000.csv")
print(exactlyFifty(rawData))
rawData.close()
