import csv

def writeSummary():
    year = []
    month = []
    minList = []
    maxList = []
    min = 500
    max = 0
    prevMonth = 1
    prevday = 1
    with open("KCQT.csv") as data:
        readData = csv.DictReader(data)
        for row in readData:

            yr, mon, day = row['date'].split('-')
            if  int(day) < int(prevday) :
                minList.append(min)
                maxList.append(max)
                year.append(yr)
                month.append(prevMonth)
                min = int(row['actual_min_temp'])
                max = int(row['actual_max_temp'])
            
            if int(row['actual_min_temp']) < min:
                min = int(row['actual_min_temp'])

            if int(row['actual_max_temp']) > max:
                max = int(row['actual_max_temp'])
            
            prevMonth = mon
            prevday = day

        #  for last month 
        minList.append(min)
        maxList.append(max)
        year.append(yr)
        month.append(prevMonth)
    
    with open("summary.csv", 'w') as usersData:
        fieldnames = ['year', 'month', 'min_temp', 'max_temp']
        writer = csv.DictWriter(usersData, fieldnames = fieldnames)
        writer.writeheader()
        for i in range(len(year)):
            writer.writerow({ 'year' : year[i], 'month' : month[i], 'min_temp' : minList[i], 'max_temp' : maxList[i]})

writeSummary()