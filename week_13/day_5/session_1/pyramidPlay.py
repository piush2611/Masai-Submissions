# function for pyramid
def pyramid(n):
    for i in range(n):
        line = ""
        for j in range(n - i):
            line += "."
        for k in range(i + 1):
            line += "0."
        for m in range(n -(i + 1)):
            line += "."
        print(line)


# function for inverse pyramid
def inversePyramid(n):
    for i in range(n-1,-1,-1):
        line = ""
        for j in range(n - i):
            line += "."
        for k in range(i + 1):
            line += "0."
        for m in range(n -(i + 1)):
            line += "."
        print(line)

# function for rhombus
def rhombus(n):
    for i in range(n-1):
        line = ""
        for j in range(n - i):
            line += "."
        for k in range(i + 1):
            line += "0."
        for m in range(n -(i + 1)):
            line += "."
        print(line)
        
    for i in range(n-1,-1,-1):
        line = ""
        for j in range(n - i):
            line += "."
        for k in range(i + 1):
            line += "0."
        for m in range(n -(i + 1)):
            line += "."
        print(line)

inp = int(input("Please enter the level : "))
pyramid(inp)
print("\n")
inversePyramid(inp)
print("\n")
rhombus(inp)