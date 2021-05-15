def taxCalculator(income):
    tax = 0
    if income >= 1000000:
        a = income - 1000000
        tax += a*0.3
        b = income - a - 500000
        tax += a*0.2
        c = income - a - b - 250000
        tax += c*0.1
    elif income >= 500000:
        a = income - 500000
        tax += a*0.2
        b = income - a - 250000
        tax += b*0.1
    elif income >= 250000:
        a = income - 250000
        tax += a*0.1
    return tax

def rebateCalculator(income, savings):
    rebate = 0
    if income >= 1000000:
        rebate = savings*0.1
    elif income >= 500000:
        rebate = savings*0.3
    else:
        rebate = savings*0.5
    
    if rebate > 50000:
        rebate = 50000
    return rebate

income = int(input("Please enter your income : "))
savings = int(input("Please enter your savings : "))

totalTax = taxCalculator(income) - rebateCalculator(income, savings)
if totalTax < 0:
    totalTax = 0
print("The total tax you need to pay is " + str(totalTax))